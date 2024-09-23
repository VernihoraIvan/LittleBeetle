import Minus from "@/assets/icons/minus.svg?react";
import Plus from "@/assets/icons/plus.svg?react";
import { QuantityAdjusterProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";
import clsx from "clsx";

const QuantityAdjuster = ({ isOverlay = false, id }: QuantityAdjusterProps) => {
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const reduceQuantity = useCart((state) => state.reduceQuantity);
  const removeProduct = useCart((state) => state.removeFromCart);
  const quantity =
    useCart((state) => state.items.find((item) => item.id === id)?.quantity) ||
    0;
  const setStage = useStage((state) => state.setStage);

  const removeFee = useShipment((state) => state.removeFee);

  const incrementQuantity = (id: string) => {
    increaseQuantity(id);
  };

  const decrementQuantity = (id: string) => {
    if (quantity && quantity > 0) {
      reduceQuantity(id);
    }
    if (quantity === 1) {
      removeProduct(id);
      removeFee(id);
      setStage(1);
    }
  };
  return (
    <div
      className={clsx(
        "flex gap-gapS mr-[120px] items-center  xl:mr-[40px] lg:mr-[50px] smd:mr-[40px]",
        isOverlay ? "" : "relative"
      )}
    >
      <Minus
        className="cursor-pointer "
        onClick={() => decrementQuantity(id)}
      />
      <p>{quantity}</p>
      <Plus className="cursor-pointer" onClick={() => incrementQuantity(id)} />
    </div>
  );
};

export default QuantityAdjuster;
