import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormikProps } from "formik";
import { toast } from "react-toastify";
import { ArrowRight, Loader2 } from "lucide-react";
import ShipmentEl from "../Elements/ShipmentEl";
import SummaryUniversal from "../SummaryUniversal";
import { BackLink, CheckoutGrid, StepHeading } from "../CheckoutShared";
import { itemProps, useCart } from "@/zustand/productStore";
import { extraProducts, includedProducts } from "@/utilities/data";
import { useStage } from "@/zustand/stageStore";
import { ShipmentDetails } from "@/zustand/shipmentStore";
import { deliveryFeeData } from "@/utilities/deliveryFeeData";
import { useOrderLines } from "@/zustand/orderLinesStore";

interface DeliveryInfo {
  fee: number;
  duration: number;
}

interface OrderLine {
  address: {
    country: string;
    city: string;
    street: string;
    postal_code: string;
  };
  products: {
    id: string;
    product_name: string;
    quantity: number;
    weight: number;
  }[];
  totalWeight: number;
  totalDeliveryFee?: number;
  deliveryDuration?: number;
}

const WEIGHT_LIMIT = 3;
const ADDITIONAL_FEE = 2;

function getDeliveryInfoByCountry(countryName: string): DeliveryInfo | null {
  const deliveryInfo = deliveryFeeData.find((data) =>
    data.countries.some(
      (country) => country.toLowerCase() === countryName.toLowerCase()
    )
  );

  if (!deliveryInfo) {
    return null;
  }

  return {
    fee: deliveryInfo.fee,
    duration: deliveryInfo.duration,
  };
}

function getProductWeight(productName: string): number {
  switch (productName.toLowerCase()) {
    case "poster":
      return 2;
    case "printed book":
      return 2;
    case "postcards":
      return 0.375;
    default:
      return 0;
  }
}

function calculateDeliveryFeeByWeight(
  baseDeliveryFee: number,
  totalWeight: number
): number {
  if (totalWeight <= WEIGHT_LIMIT) {
    return baseDeliveryFee;
  }

  const numberOfAdditionalCharges: number =
    totalWeight <= WEIGHT_LIMIT ? 0 : Math.ceil(totalWeight / WEIGHT_LIMIT - 1);

  return baseDeliveryFee + ADDITIONAL_FEE * numberOfAdditionalCharges;
}

function groupProductsByAddress(products: itemProps[]): OrderLine[] {
  const orderLines: { [key: string]: OrderLine } = {};

  products.forEach((product) => {
    if (!product.shipment) return;

    const addressKey = `${product.shipment.country}-${product.shipment.city}-${product.shipment.street_adress}-${product.shipment.postal_code}`;

    if (!orderLines[addressKey]) {
      orderLines[addressKey] = {
        address: {
          country: product.shipment.country || "",
          city: product.shipment.city || "",
          street: product.shipment.street_adress || "",
          postal_code: product.shipment.postal_code || "",
        },
        products: [],
        totalWeight: 0,
      };
    }

    const weight = getProductWeight(product.product_name) * product.quantity;
    orderLines[addressKey].products.push({
      id: product.id,
      product_name: product.product_name,
      quantity: product.quantity,
      weight: weight,
    });
    orderLines[addressKey].totalWeight += weight;
  });

  return Object.values(orderLines);
}

const productToDisplay = includedProducts.concat(extraProducts);

const CheckoutShipment = () => {
  const products = useCart((state) => state.items);
  const setShipmentDeliveryFee = useCart(
    (state) => state.setShipmentDeliveryFee
  );
  const setDeliveryFee = useCart((state) => state.setDeliveryFee);
  const { setOrderLines } = useOrderLines();
  const setStage = useStage((state) => state.setStage);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formik instances of the "different address" forms currently on screen
  const subForms = useRef(new Map<string, FormikProps<ShipmentDetails>>());
  const registerSubForm = useCallback(
    (id: string, instance: FormikProps<ShipmentDetails> | null) => {
      if (instance) subForms.current.set(id, instance);
      else subForms.current.delete(id);
    },
    []
  );

  const recalculateDelivery = useCallback(
    (items: itemProps[]) => {
      if (items.length === 0) {
        setOrderLines([]);
        return;
      }

      const orderLinesWithFees = groupProductsByAddress(items).map(
        (orderLine) => {
          const baseDeliveryInfo = getDeliveryInfoByCountry(
            orderLine.address.country
          );
          if (!baseDeliveryInfo) {
            return { ...orderLine, totalDeliveryFee: 0, deliveryDuration: 0 };
          }

          const totalDeliveryFee = calculateDeliveryFeeByWeight(
            baseDeliveryInfo.fee,
            orderLine.totalWeight
          );

          orderLine.products.forEach((product) => {
            const current = items.find((item) => item.id === product.id);
            if (
              current?.shipment?.delivery_fee !== totalDeliveryFee ||
              current?.shipment?.duration !== baseDeliveryInfo.duration
            ) {
              setShipmentDeliveryFee(
                product.id,
                totalDeliveryFee,
                baseDeliveryInfo.duration
              );
              setDeliveryFee(product.id, totalDeliveryFee);
            }
          });

          return {
            ...orderLine,
            totalDeliveryFee,
            deliveryDuration: baseDeliveryInfo.duration,
          };
        }
      );

      setOrderLines(orderLinesWithFees);
    },
    [setOrderLines, setShipmentDeliveryFee, setDeliveryFee]
  );

  // keep the summary in sync while addresses are being edited
  useEffect(() => {
    recalculateDelivery(products);
  }, [products, recalculateDelivery]);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const filteredForMyself = products.filter((product) => !product.isAGift);
  const filteredAsGift = products.filter((product) => product.isAGift);

  const handleSubmitAllForms = async () => {
    setIsSubmitting(true);
    try {
      const forms = [...subForms.current.values()];
      const results = await Promise.all(
        forms.map(async (formik) => {
          const errors = await formik.validateForm();
          await formik.submitForm();
          return Object.keys(errors).length === 0;
        })
      );
      if (!results.every(Boolean)) {
        toast.error("Please complete the highlighted address fields.");
        return;
      }

      // read the store directly: the submits above just updated it
      const items = useCart.getState().items;
      recalculateDelivery(items);
      items.forEach((product) => {
        const info = getDeliveryInfoByCountry(product.shipment?.country || "");
        setShipmentDeliveryFee(
          product.id,
          info?.fee || 0,
          info?.duration || product.shipment?.duration || 0
        );
      });

      setStage(4);
      navigate("/checkout/payment");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderGroup = (title: string, items: itemProps[]) =>
    items.length > 0 && (
      <section>
        <h3 className="mb-3 font-secondaryBold text-primPurple/70">{title}</h3>
        <ul className="flex flex-col gap-4">
          {items.map((product) => (
            <ShipmentEl
              key={product.id}
              onSubmitRef={registerSubForm}
              id={product.id}
              title={product.product_name}
              shipment={product.shipment}
              imgPath={
                productToDisplay.find((p) => p.title === product.product_name)
                  ?.imagePath
              }
            />
          ))}
        </ul>
      </section>
    );

  return (
    <CheckoutGrid
      aside={
        <SummaryUniversal subTotal={totalFee}>
          <button
            type="button"
            onClick={handleSubmitAllForms}
            disabled={isSubmitting}
            className="btn-primary btn-lg w-full"
          >
            {isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" aria-label="Saving" />
            ) : (
              <>
                Continue to payment
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
          <BackLink to="/checkout/details" />
        </SummaryUniversal>
      }
    >
      <StepHeading
        title="Shipment"
        description="Choose where each printed gift should be delivered."
      />
      <div className="flex flex-col gap-8">
        {renderGroup("For myself", filteredForMyself)}
        {renderGroup("As a gift", filteredAsGift)}
      </div>
    </CheckoutGrid>
  );
};

export default CheckoutShipment;
