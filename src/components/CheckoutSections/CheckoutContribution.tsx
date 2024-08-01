import { useCart } from "@/zustand/productStore";
import { extraProducts } from "@/utilities/data";
import CheckoutContributionEl from "../Elements/CheckoutContributionEl";
import CartIncludedWidget from "../CartIncludedWidget";
import ButtonTo from "../ButtonTo";
import SummaryCheckout from "../SummaryCheckout";
import clsx from "clsx";

const CheckoutContribution = () => {
  const products = useCart((state) => state.items);

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
                key={product.name}
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
        <SummaryCheckout subTotal={33} shippingFee={22} />
      </div>
      <CartIncludedWidget />
      <ButtonTo
        to="/checkout/details"
        title="CONTINUE TO NEXT"
        style="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-2xl"
      />
    </>
  );
};

export default CheckoutContribution;
