import { useCart } from "@/zustand/productStore";
import { extraProducts } from "@/utilities/data";
import CheckoutContributionEl from "../Elements/CheckoutContributionEl";
import CartIncludedWidget from "../CartIncludedWidget";
import ButtonTo from "../ButtonTo";
import SummaryCheckout from "../SummaryCheckout";
import clsx from "clsx";
// import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";
import { useEffect, useState } from "react";

const CheckoutContribution = () => {
  const [totalFeeState, setTotalFee] = useState(0);
  const products = useCart((state) => state.items);
  // const totalFee = useShipment((state) => state.fee).reduce(
  //   (acc, curr) => acc + curr.price * curr.quantity,
  //   0
  // );

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  useEffect(() => {
    setTotalFee(totalFee);
  }, [totalFee]);

  console.log(products[0].quantity);
  console.log(totalFee);

  const setStage = useStage((state) => state.setStage);
  return (
    <>
      <div
        className={clsx(
          "flex  pt-bookPT",
          products.length > 0 ? "justify-between" : "justify-end"
        )}
      >
        <section className="">
          {products.length > 0 &&
            products.map((product) => (
              <CheckoutContributionEl
                key={product.id}
                id={product.id}
                name={product.name}
                quantity={product.quantity}
                total={product.price * product.quantity}
                language={product.itemLanguage}
                imgPath={
                  extraProducts.find((p) => p.title === product.name)?.imagePath
                }
              />
            ))}
        </section>
        <SummaryCheckout subTotal={totalFeeState} shippingFee={0} />
      </div>
      <CartIncludedWidget />
      <ButtonTo
        onClick={() => setStage(2)}
        to="/checkout/details"
        title="CONTINUE TO NEXT"
        style="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-2xl"
      />
    </>
  );
};

export default CheckoutContribution;
