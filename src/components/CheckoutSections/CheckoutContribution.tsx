import { useCart } from "@/zustand/productStore";
import { extraProducts } from "@/utilities/data";
import CheckoutContributionEl from "../Elements/CheckoutContributionEl";
import CartIncludedWidget from "../CartIncludedWidget";
import ButtonTo from "../ButtonTo";
import SummaryCheckout from "../SummaryCheckout";
import clsx from "clsx";
import { useStage } from "@/zustand/stageStore";
import { useEffect, useState } from "react";
import EmptyCart from "../EmptyCart";

const CheckoutContribution = () => {
  const [totalFeeState, setTotalFee] = useState(0);
  const products = useCart((state) => state.items);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  useEffect(() => {
    setTotalFee(totalFee);
  }, [totalFee]);

  const setStage = useStage((state) => state.setStage);
  return (
    <>
      <div
        className={clsx(
          "flex  pt-bookPT",
          products.length > 0 ? "justify-between" : "justify-between"
        )}
      >
        <section className="">
          {products.length > 0 ? (
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
                isGiftpossible={true}
              />
            ))
          ) : (
            <div className="flex justify-begin">
              <EmptyCart />
            </div>
          )}
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
