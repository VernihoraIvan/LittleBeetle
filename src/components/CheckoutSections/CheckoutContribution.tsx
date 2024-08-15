import { useCart } from "@/zustand/productStore";
import { extraProducts } from "@/utilities/data";
import CheckoutContributionEl from "../Elements/CheckoutContributionEl";
import CartIncludedWidget from "../CartIncludedWidget";
import ButtonTo from "../ButtonTo";
import SummaryCheckout from "../SummaryCheckout";
import clsx from "clsx";
import { useShipment } from "@/zustand/shipmentStore";

const CheckoutContribution = () => {
  const products = useCart((state) => state.items);
  const totalFee = useShipment((state) => state.fee).reduce(
    (acc, curr) => acc + curr,
    0
  );
  // console.log(products);
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
        <SummaryCheckout subTotal={totalFee} shippingFee={0} />
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
