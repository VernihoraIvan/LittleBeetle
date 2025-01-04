import Minus from "@/assets/icons/minus.svg?react";
import Plus from "@/assets/icons/plus.svg?react";
import { QuantityAdjusterWStateProps } from "@/utilities/interfaces";

const QuantityAdjuster = ({
  quantity,
  setQuantity,
}: QuantityAdjusterWStateProps) => {
  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex gap-gapS mr-[120px] items-center">
      <Minus className="cursor-pointer  " onClick={handleDecrementQuantity} />
      <p>{quantity}</p>
      <Plus className="cursor-pointer" onClick={handleIncrementQuantity} />
    </div>
  );
};

export default QuantityAdjuster;
