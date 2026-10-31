import { QuantityAdjusterProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";
import { QuantityStepper } from "./Elements/ChoiceControls";

const QuantityAdjuster = ({ id }: QuantityAdjusterProps) => {
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const reduceQuantity = useCart((state) => state.reduceQuantity);
  const removeProduct = useCart((state) => state.removeFromCart);
  const quantity =
    useCart((state) => state.items.find((item) => item.id === id)?.quantity) ||
    0;
  const setStage = useStage((state) => state.setStage);
  const removeFee = useShipment((state) => state.removeFee);

  const decrementQuantity = () => {
    if (quantity > 0) {
      reduceQuantity(id);
    }
    if (quantity === 1) {
      removeProduct(id);
      removeFee(id);
      setStage(1);
    }
  };

  return (
    <QuantityStepper
      value={quantity}
      onDecrement={decrementQuantity}
      onIncrement={() => increaseQuantity(id)}
    />
  );
};

export default QuantityAdjuster;
