import Minus from "@/assets/icons/minus.svg?react";
import Plus from "@/assets/icons/plus.svg?react";
import { QuantityAdjusterWStateProps } from "@/utilities/interfaces";
// import { useCart } from "@/zustand/store";
import clsx from "clsx";

const QuantityAdjuster = ({
  //   name,
  //   price,
  isOverlay = false,
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
  //   const quantity =
  //     useCart(
  //       (state) => state.items.find((item) => item.name === name)?.quantity
  //     ) || 0;
  //   console.log(quantity);

  //   const incrementQuantity = (name: string) => {
  //     increaseQuantity(name);
  //   };

  //   const decrementQuantity = (name: string) => {
  //     if (quantity && quantity > 0) {
  //       reduceQuantity(name);
  //     }
  //     if (quantity === 1) {
  //       removeProduct(name, price);
  //     }
  //   };
  return (
    <div
      className={clsx(
        "flex gap-gapS mr-[120px] items-center",
        isOverlay ? "" : "relative"
      )}
    >
      <Minus className="cursor-pointer " onClick={handleDecrementQuantity} />
      <p>{quantity}</p>
      <Plus className="cursor-pointer" onClick={handleIncrementQuantity} />
    </div>
  );
};

export default QuantityAdjuster;
