import { useCart } from "@/zustand/productStore";
import { extraProducts, includedProducts } from "@/utilities/data";
// import CheckoutContributionEl from "../Elements/CheckoutContributionEl";
import CartIncludedWidget from "../CartIncludedWidget";
import ButtonTo from "../ButtonTo";
// import SummaryCheckout from "../SummaryCheckout";
import clsx from "clsx";
import { useStage } from "@/zustand/stageStore";
import { useEffect, useState } from "react";
import EmptyCart from "../EmptyCart";
import SummaryUniversal from "../SummaryUniversal";
import PurchaseEl from "../Elements/PurchaseEl";
import TitleBar from "../TitleBar";

const CheckoutContribution = () => {
  const [totalFeeState, setTotalFee] = useState(0);
  const products = useCart((state) => state.items);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const setStage = useStage((state) => state.setStage);

  useEffect(() => {
    setTotalFee(totalFee);
    if (products.length === 0) {
      setStage(1);
    }
  }, [products, setStage, totalFee]);

  const productToDisplay = includedProducts.concat(extraProducts);

  return (
    <div>
      <div
        className={clsx(
          "flex gap-10  pt-bookPT smd:flex-col smd:pt-0  smd:gap-0",
          products.length > 0 ? "justify-between" : "justify-between"
        )}
      >
        <div className="w-full xxl:pl-10 md:pt-[140px]">
          {products.length > 0 ? (
            <div className="max-w-full ">
              <TitleBar />
              {products.length > 0 &&
                products.map((product) => (
                  <PurchaseEl
                    key={product.id}
                    language={product.itemLanguage}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    total={product.price * product.quantity}
                    imgPath={
                      productToDisplay.find((p) => p.title === product.name)
                        ?.imagePath
                    }
                    id={product.id}
                  />
                ))}
            </div>
          ) : (
            // products.map((product) => (
            //   <CheckoutContributionEl
            //     key={product.id}
            //     id={product.id}
            //     name={product.name}
            //     quantity={product.quantity}
            //     total={product.price * product.quantity}
            //     language={product.itemLanguage}
            //     imgPath={
            //       extraProducts.find((p) => p.title === product.name)?.imagePath
            //     }
            //     isGiftpossible={true}
            //   />
            // ))
            <div className="flex justify-begin">
              <EmptyCart />
            </div>
          )}
        </div>
        {/* <SummaryCheckout subTotal={totalFeeState} shippingFee={0} /> */}
        <SummaryUniversal subTotal={totalFeeState} shippingFee={0} />
      </div>
      <CartIncludedWidget />
      <ButtonTo
        onClick={() => setStage(2)}
        to="/checkout/details"
        title="NEXT STEP"
        style="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px]
          xl:text-[20px]
          lg:text-[18px]
          smd:text-[18px] 
          sm:w-full sm:px-0 sm:block"
      />
    </div>
  );
};

export default CheckoutContribution;
