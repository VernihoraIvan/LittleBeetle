import ShipmentEl from "../Elements/ShipmentEl";
import { useCart } from "@/zustand/productStore";
import { extraProducts, includedProducts } from "@/utilities/data";
import ButtonTo from "../ButtonTo";
import { useStage } from "@/zustand/stageStore";
import { useEffect, useRef } from "react";
import { FormikProps } from "formik";
import SummaryUniversal from "../SummaryUniversal";
import { ShipmentDetails, useShipment } from "@/zustand/shipmentStore";
// import { availableCountries } from "@/utilities/data";
import { deliveryFeeData } from "@/utilities/deliveryFeeData";

interface DeliveryInfo {
  fee: number;
  duration: number;
}

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

const CheckoutShipment = () => {
  const products = useCart((state) => state.items);
  const shipment = useShipment((state) => state.shipment);
  const fee = useShipment((state) => state.fee);
  const setDeliveryFee = useShipment((state) => state.setDeliveryFee);
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
  const handleSubmitAllForms = () => {
    subFormsRefs.current.forEach((formik) => {
      formik.submitForm();
    });
    setStage(4);
  };

  const deliveryInfo = getDeliveryInfoByCountry(shipment.country || "");
  // useEffect(() => {
  //   if (deliveryInfo) {
  //     setDeliveryFee(fee.id, deliveryInfo.fee, deliveryInfo.duration);
  //   }
  // }, [deliveryInfo]);

  console.log("deliveryInfo", deliveryInfo);
  console.log(fee, "fee");
  return (
    <section className="py-10 flex flex-col ">
      <div className="flex justify-between w-full xs:flex-col xs:gap-20 smd:gap-10 md:pt-[80px]">
        <div className=" flex flex-col gap-[110px]">
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
                />
              ))}
          </div>
        </div>
        <SummaryUniversal subTotal={totalFee} shippingFee={0} />
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
