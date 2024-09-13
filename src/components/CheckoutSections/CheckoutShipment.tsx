import ShippingSummary from "../ShippingSummary";
import ShipmentEl from "../Elements/ShipmentEl";
import { useCart } from "@/zustand/productStore";
import { extraProducts, includedProducts } from "@/utilities/data";
import ButtonTo from "../ButtonTo";
import { useStage } from "@/zustand/stageStore";
import { useRef } from "react";
import { FormikProps } from "formik";
import { MyFormValues } from "@/utilities/interfaces";

const CheckoutShipment = () => {
  const products = useCart((state) => state.items);
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
  const subFormsRefs = useRef<FormikProps<MyFormValues>[]>([]);
  const handleAddSubFormRef = (ref: FormikProps<MyFormValues>) => {
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
  return (
    <section className="py-10 flex flex-col">
      <div className="flex ">
        <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS flex flex-col gap-[110px]">
          <div className="flex flex-col">
            {filteredForMyself.length > 0 && (
              <h2 className="font-secondaryBold text-buttonS">For myself</h2>
            )}
            {filteredForMyself.length > 0 &&
              filteredForMyself.map((product) => (
                <ShipmentEl
                  key={product.id}
                  onSubmitRef={handleAddSubFormRef}
                  id={product.id}
                  title={product.name}
                  shipment={product.shippment}
                  imgPath={
                    productToDisplay.find((p) => p.title === product.name)
                      ?.imagePath
                  }
                />
              ))}
          </div>
          <div>
            {filteredAsGift.length > 0 && (
              <h2 className="font-secondaryBold text-buttonS">As a gift</h2>
            )}
            {filteredAsGift.length > 0 &&
              filteredAsGift.map((product) => (
                <ShipmentEl
                  key={product.id}
                  onSubmitRef={handleAddSubFormRef}
                  id={product.id}
                  title={product.name}
                  shipment={product.shippment}
                  imgPath={
                    productToDisplay.find((p) => p.title === product.name)
                      ?.imagePath
                  }
                />
              ))}
          </div>
        </div>
        <ShippingSummary subTotal={totalFee} shippingFee={0} />
      </div>
      <ButtonTo
        onClick={handleSubmitAllForms}
        to="/checkout/payment"
        title="CONTINUE TO NEXT"
        style="w-fit mt-bookPT text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px]"
      />
    </section>
  );
};

export default CheckoutShipment;
