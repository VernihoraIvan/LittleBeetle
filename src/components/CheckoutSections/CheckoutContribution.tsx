import { useCart } from "@/zustand/store";
import { extraProducts } from "@/utilities/data";
import CheckoutContributionEl from "../Elements/CheckoutContributionEl";
import CartIncludedWidget from "../CartIncludedWidget";
import ButtonTo from "../ButtonTo";

const CheckoutContribution = () => {
  const products = useCart((state) => state.items);

  return (
    <>
      <section className="mb-bookPT">
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
