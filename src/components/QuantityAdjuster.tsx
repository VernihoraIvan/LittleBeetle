import Minus from "@/assets/icons/minus.svg?react";
import Plus from "@/assets/icons/plus.svg?react";
import { QuantityAdjusterProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/store";
import clsx from "clsx";

const QuantityAdjuster = ({
  //   setQuantity,
  //   quantityEl,
  name,
  price,
  isOverlay = false,
}: QuantityAdjusterProps) => {
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const reduceQuantity = useCart((state) => state.reduceQuantity);
  const removeProduct = useCart((state) => state.removeFromCart);
  const quantity = useCart(
    (state) => state.items.find((item) => item.name === name)?.quantity
  );

  const incrementQuantity = (name: string) => {
    // if (!quantity) {
    //   setQuantity(1);
    // } else {
    //   setQuantity(quantity + 1);
    // }
    increaseQuantity(name);
  };

  const decrementQuantity = (name: string) => {
    if (quantity && quantity > 0) {
      //   setQuantity(quantity - 1);
      reduceQuantity(name);
    }
    if (quantity === 1) {
      removeProduct(name, price);
    }
  };
  return (
    // <div className="flex gap-gapS mr-[120px] items-center">
    <div
      className={clsx(
        "flex gap-gapS mr-[120px] items-center",
        isOverlay ? "" : "relative"
      )}
    >
      <Minus
        className="cursor-pointer "
        onClick={() => decrementQuantity(name)}
      />
      <p>{quantity || 0}</p>
      <Plus
        className="cursor-pointer"
        onClick={() => incrementQuantity(name)}
      />
    </div>
  );
};

export default QuantityAdjuster;
