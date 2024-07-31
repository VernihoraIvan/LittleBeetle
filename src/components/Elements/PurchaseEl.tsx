import Edit from "@/assets/icons/edit.svg?react";
import CrossLogo from "@/assets/icons/cross.svg?react";
import { PurchaseElProps } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { useCart } from "@/zustand/store";
import QuantityAdjuster from "@/components/QuantityAdjuster";

const PurchaseEl = ({ name, price, total, imgPath }: PurchaseElProps) => {
  const [totalEl, setTotal] = useState<number>(total);
  const removeProduct = useCart((state) => state.removeFromCart);
  const quantityEl = useCart(
    (state) => state.items.find((item) => item.name === name)?.quantity
  );

  useEffect(() => {
    if (quantityEl) {
      setTotal(price * quantityEl);
    }
  }, [quantityEl, price]);

  return (
    <div className="relative mt-10 mb-prodMar flex justify-between w-full pr-6 ">
      <CrossLogo
        className="cursor-pointer absolute left-[-60px]"
        onClick={() => removeProduct(name, price)}
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
          <Edit className="cursor-pointer" />
        </li>
        <li className="relative">
          <QuantityAdjuster name={name} price={price} />
        </li>
        <li className="items-center w-10">£{totalEl}</li>
      </ul>
    </div>
  );
};
export default PurchaseEl;
