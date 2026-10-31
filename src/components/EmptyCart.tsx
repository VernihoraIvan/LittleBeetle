import { useGoToGifts } from "@/lib/useGoToGifts";
import { ShoppingBag } from "lucide-react";

const EmptyCart = () => {
  const goToGifts = useGoToGifts();
  return (
    <section className="card flex flex-col items-center px-6 py-14 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lilac/30">
        <ShoppingBag className="h-7 w-7" aria-hidden="true" />
      </span>
      <h2 className="heading-3 mt-5">Your cart is empty</h2>
      <p className="body mt-2 max-w-sm text-primPurple/70">
        Browse our printed gifts, or make a donation without one.
      </p>
      <button type="button" onClick={goToGifts} className="btn-primary mt-6">
        View our Donation Store
      </button>
    </section>
  );
};

export default EmptyCart;
