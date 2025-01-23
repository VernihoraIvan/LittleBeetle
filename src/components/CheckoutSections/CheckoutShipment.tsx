import ShipmentEl from "../Elements/ShipmentEl";
import { itemProps, useCart } from "@/zustand/productStore";
import { extraProducts, includedProducts } from "@/utilities/data";
import ButtonTo from "../ButtonTo";
import { useStage } from "@/zustand/stageStore";
import { FormikProps } from "formik";
import SummaryUniversal from "../SummaryUniversal";
import { ShipmentDetails } from "@/zustand/shipmentStore";
import { deliveryFeeData } from "@/utilities/deliveryFeeData";
import { useRef, useEffect, useState } from "react";
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
    console.log(`No delivery info found for country: ${countryName}`);
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
    case "book":
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
  const additionalWeightUnits = Math.ceil(
    (totalWeight - WEIGHT_LIMIT) / WEIGHT_LIMIT
  );
  return baseDeliveryFee + additionalWeightUnits * ADDITIONAL_FEE;
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

const CheckoutShipment = () => {
  const [isCountryChanged, setIsCountryChanged] = useState(false);
  const products = useCart((state) => state.items);

  const setShipmentDeliveryFee = useCart(
    (state) => state.setShipmentDeliveryFee
  );
  const { orderLines, setOrderLines } = useOrderLines();
  console.log("orderLines", orderLines);

  useEffect(() => {
    if (isCountryChanged) {
      subFormsRefs.current.forEach((formik) => formik.submitForm());
      setIsCountryChanged(false);
    }
  }, [isCountryChanged]);

  const calculateDeliveryFee = (product: itemProps) => {
    const deliveryInfo = getDeliveryInfoByCountry(
      product.shipment?.country || ""
    );
    console.log("deliveryInfo", deliveryInfo);
    if (deliveryInfo) {
      console.log("deliveryInfo.fee", deliveryInfo.fee);
      return deliveryInfo.fee;
    }
    console.log("deliveryInfo.fee 00000");
    return 0;
  };

  useEffect(() => {
    if (products.length === 0) {
      setOrderLines([]);
      return;
    }

    // Create a map of current delivery fees to check if update is needed
    const currentFees = new Map(
      products.map((product) => [
        product.id,
        {
          fee: product.shipment?.default_delivery_fee,
          duration: product.shipment?.duration,
        },
      ])
    );

    const calculatedOrderLines = groupProductsByAddress(products);

    const orderLinesWithFees = calculatedOrderLines.map((orderLine) => {
      const baseDeliveryInfo = getDeliveryInfoByCountry(
        orderLine.address.country
      );
      console.log(
        "Country:",
        orderLine.address.country,
        "Delivery Info:",
        baseDeliveryInfo
      );

      if (!baseDeliveryInfo) {
        console.log("No delivery info found for address:", orderLine.address);
        return {
          ...orderLine,
          totalDeliveryFee: 0,
          deliveryDuration: 0,
        };
      }

      const totalDeliveryFee = calculateDeliveryFeeByWeight(
        baseDeliveryInfo.fee,
        orderLine.totalWeight
      );

      const feePerProduct = totalDeliveryFee / orderLine.products.length;

      // Update individual product fees
      orderLine.products.forEach((product) => {
        const currentFee = currentFees.get(product.id);
        if (
          !currentFee ||
          currentFee.fee !== feePerProduct ||
          currentFee.duration !== baseDeliveryInfo.duration
        ) {
          setShipmentDeliveryFee(
            product.id,
            feePerProduct,
            baseDeliveryInfo.duration
          );
        }
      });

      return {
        ...orderLine,
        totalDeliveryFee: totalDeliveryFee,
        deliveryDuration: baseDeliveryInfo.duration,
      };
    });

    setOrderLines(orderLinesWithFees);
    setIsCountryChanged(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, setOrderLines, isCountryChanged]);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const setStage = useStage((state) => state.setStage);
  const productToDisplay = includedProducts.concat(extraProducts);
  const filteredForMyself = products.filter(
    (product) => product.isAGift === false
  );

  const filteredAsGift = products.filter((product) => product.isAGift === true);
  const subFormsRefs = useRef<FormikProps<ShipmentDetails>[]>([]);

  const handleAddSubFormRef = (ref: FormikProps<ShipmentDetails>) => {
    if (ref && !subFormsRefs.current.includes(ref)) {
      subFormsRefs.current.push(ref);
    }
  };

  const handleSubmitAllForms = async () => {
    // Wait for all forms to submit
    await Promise.all(
      subFormsRefs.current.map((formik) => formik.submitForm())
    );

    // Update delivery fees after form submission
    products.forEach((product) => {
      const fee = calculateDeliveryFee(product);
      setShipmentDeliveryFee(product.id, fee, product.shipment.duration);
    });

    setStage(4);
  };
  console.log("isCountryChanged", isCountryChanged);
  console.log("products", products);

  return (
    <section className="py-10 flex flex-col ">
      <div className="flex justify-between w-full xs:flex-col xs:gap-20 smd:gap-10 md:pt-[80px]">
        <div className=" flex flex-col gap-[110px]">
          {orderLines.map((orderLine, index) => (
            <div key={index} className="mb-8 p-4 border rounded">
              <div className="mb-4">
                <h3 className="font-secondaryBold text-lg">
                  Shipping Address {index + 1}
                </h3>
                <p>{orderLine.address.street}</p>
                <p>
                  {orderLine.address.city}, {orderLine.address.postal_code}
                </p>
                <p>{orderLine.address.country}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-secondaryBold">Products:</h4>
                {orderLine.products.map((product) => (
                  <div key={product.id} className="ml-4">
                    <p>
                      {product.product_name} x{product.quantity} (
                      {product.weight}kg)
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <p className="font-secondaryBold">
                  Total Weight: {orderLine.totalWeight.toFixed(3)}kg
                </p>
                <p className="font-secondaryBold">
                  Delivery Fee: €{orderLine.totalDeliveryFee?.toFixed(2)}
                </p>
                <p>Estimated Delivery: {orderLine.deliveryDuration} days</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col">
            {filteredForMyself.length > 0 && (
              <h2
                className="font-secondaryBold text-[28px]
              xl:text-[24px]
              lg:text-[22px]
              md:text-[22px]
              sm:text-[22px]"
              >
                For myself
              </h2>
            )}
            {filteredForMyself.length > 0 &&
              filteredForMyself.map((product) => (
                <ShipmentEl
                  key={product.id}
                  onSubmitRef={handleAddSubFormRef}
                  id={product.id}
                  title={product.product_name}
                  shipment={product.shipment}
                  imgPath={
                    productToDisplay.find(
                      (p) => p.title === product.product_name
                    )?.imagePath
                  }
                  setIsCountryChanged={setIsCountryChanged}
                />
              ))}
          </div>
          <div>
            {filteredAsGift.length > 0 && (
              <h2
                className="font-secondaryBold text-buttonS
              xl:text-[24px]
              lg:text-[22px]
              md:text-[22px]
              sm:text-[22px]"
              >
                As a gift
              </h2>
            )}
            {filteredAsGift.length > 0 &&
              filteredAsGift.map((product) => (
                <ShipmentEl
                  key={product.id}
                  onSubmitRef={handleAddSubFormRef}
                  id={product.id}
                  title={product.product_name}
                  shipment={product.shipment}
                  imgPath={
                    productToDisplay.find(
                      (p) => p.title === product.product_name
                    )?.imagePath
                  }
                  setIsCountryChanged={setIsCountryChanged}
                />
              ))}
          </div>
        </div>
        <SummaryUniversal
          subTotal={totalFee}
          shippingFee={orderLines.reduce(
            (sum, line) => sum + (line.totalDeliveryFee || 0),
            0
          )}
        />
      </div>
      <ButtonTo
        onClick={handleSubmitAllForms}
        to="/checkout/payment"
        title="NEXT STEP"
        style="w-fit mt-bookPT text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-[110px] text-[24px]
          xl:text-[20px]
          lg:text-[18px]
          smd:text-[18px]
          sm:w-full sm:px-0 sm:block"
      />
    </section>
  );
};

export default CheckoutShipment;
