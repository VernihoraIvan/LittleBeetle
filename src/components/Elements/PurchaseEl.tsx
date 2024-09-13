import CrossLogo from "@/assets/icons/cross.svg?react";
import { PurchaseElProps } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { useCart } from "@/zustand/productStore";
import QuantityAdjuster from "@/components/QuantityAdjuster";
import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";

const PurchaseEl = ({ name, price, total, imgPath, id }: PurchaseElProps) => {
  const removeProduct = useCart((state) => state.removeFromCart);
  const [totalEl, setTotal] = useState<number>(total);
  const quantityEl = useCart(
    (state) => state.items.find((item) => item.id === id)?.quantity
  );
  const removeFee = useShipment((state) => state.removeFee);
  const setStage = useStage((state) => state.setStage);

  const removeProductHandler = () => {
    removeProduct(id);
    removeFee(id);
    setStage(1);
  };

  useEffect(() => {
    if (quantityEl) {
      setTotal(price * quantityEl);
    }
  }, [quantityEl, price]);

  return (
    <div className="relative mt-10 mb-prodMar flex justify-between w-full pr-6 ">
      <CrossLogo
        className="cursor-pointer absolute left-[-60px]"
        onClick={removeProductHandler}
      />
      <div className="flex items-center">
        {imgPath && (
          <img
            className="h-purchImgH mr-12 w-imgSW"
            src={imgPath[0]}
            alt="image of a book"
          />
        )}
        <h3 className="w-[180px] text-secBlack text-linkS font-secondarySBold">
          {name}
        </h3>
      </div>
      <ul className="flex items-center justify-between select-none">
        <li className="flex gap-gapS mr-[95px] items-center">
          <p>£{price}</p>
        </li>
        <li className="relative">
          <QuantityAdjuster id={id} />
        </li>
        <li className="items-center w-10">£{totalEl}</li>
      </ul>
    </div>
  );
};
export default PurchaseEl;
