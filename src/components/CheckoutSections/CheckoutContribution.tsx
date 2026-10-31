import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import { useCart } from "@/zustand/productStore";
import { useStage } from "@/zustand/stageStore";
import { extraProducts, includedProducts } from "@/utilities/data";
import CartIncludedWidget from "../CartIncludedWidget";
import EmptyCart from "../EmptyCart";
import SummaryUniversal from "../SummaryUniversal";
import PurchaseEl from "../Elements/PurchaseEl";
import { CheckoutGrid, StepHeading } from "../CheckoutShared";
import { useGoToGifts } from "@/lib/useGoToGifts";

const productToDisplay = includedProducts.concat(extraProducts);

const CheckoutContribution = () => {
  const products = useCart((state) => state.items);
  const setStage = useStage((state) => state.setStage);
  const goToGifts = useGoToGifts();

  useEffect(() => {
    if (products.length === 0) {
      setStage(1);
      goToGifts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length]);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  if (products.length === 0) {
    return <EmptyCart />;
  }

  return (
    <CheckoutGrid
      aside={
        <>
          <SummaryUniversal subTotal={totalFee} shippingFee={0}>
            <Link
              to="/checkout/details"
              onClick={() => setStage(2)}
              className="btn-primary btn-lg w-full"
            >
              Continue
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="caption text-center text-primPurple/60">
              Delivery is calculated after you add your address.
            </p>
          </SummaryUniversal>
          <CartIncludedWidget />
        </>
      }
    >
      <StepHeading
        title="Your cart"
        description="Tick “It's a gift” for anything you'd like sent to a different address."
      />
      <ul className="flex flex-col gap-4">
        {products.map((product) => (
          <PurchaseEl
            key={product.id}
            language={product.product_language}
            name={product.product_name}
            price={product.price}
            quantity={product.quantity}
            total={product.price * product.quantity}
            imgPath={
              productToDisplay.find((p) => p.title === product.product_name)
                ?.imagePath
            }
            id={product.id}
          />
        ))}
      </ul>
      <button type="button" onClick={goToGifts} className="btn-ghost mt-4">
        <Plus className="h-4 w-4" />
        Add another printed gift
      </button>
    </CheckoutGrid>
  );
};

export default CheckoutContribution;
