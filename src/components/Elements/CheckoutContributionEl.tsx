import { Trash2 } from "lucide-react";
import { CheckoutContributionElProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import { useStage } from "@/zustand/stageStore";
import { useDonation } from "@/zustand/donationStore";

const CheckoutContributionEl = ({
  name,
  total,
  imgPath,
  language,
  id,
}: CheckoutContributionElProps) => {
  const removeProduct = useCart((state) => state.removeFromCart);
  const removeDonation = useDonation((state) => state.removeDonation);
  const setStage = useStage((state) => state.setStage);

  const removeProductHandler = () => {
    removeDonation(id);
    removeProduct(id);
    setStage(1);
  };

  return (
    <li className="card flex items-center gap-4 p-4 md:gap-6 md:p-5">
      {imgPath && (
        <img
          className="h-20 w-20 shrink-0 rounded-xl object-cover md:h-24 md:w-32"
          src={imgPath[0]}
          alt=""
        />
      )}
      <div className="min-w-0 flex-1">
        <h3 className="heading-3">{name}</h3>
        {name !== "Postcards" && (
          <p className="caption text-primPurple/60">Language: {language}</p>
        )}
      </div>
      <p className="font-secondaryBold text-lg tabular-nums">
        £{total.toFixed(2)}
      </p>
      <button
        type="button"
        onClick={removeProductHandler}
        aria-label={`Remove ${name}`}
        className="icon-btn text-primPurple/50 hover:text-alertRed"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </li>
  );
};

export default CheckoutContributionEl;
