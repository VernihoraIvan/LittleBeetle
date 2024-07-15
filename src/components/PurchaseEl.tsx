import productImg from "@/assets/images/product.png";
import Minus from "@/assets/icons/minus.svg?react";
import Plus from "@/assets/icons/plus.svg?react";
import Edit from "@/assets/icons/edit.svg?react";
import { PurchaseElProps } from "@/utilities/interfaces";
import { useEffect, useState } from "react";

const PurchaseEl = ({ name, price, quantity, total }: PurchaseElProps) => {
  const [quantityEl, setQuantity] = useState<number>(quantity);
  const [totalEl, setTotal] = useState<number>(total);

  useEffect(() => {
    setTotal(price * quantityEl);
  }, [quantityEl, price]);

  const incrementQuantity = () => {
    setQuantity(quantityEl + 1);
  };
  const decrementQuantity = () => {
    if (quantityEl > 0) {
      setQuantity(quantityEl - 1);
    }
  };

  return (
    <div className="mt-10 mb-prodMar flex justify-between w-full pr-6">
      <div className="flex items-center">
        <img
          className="h-purchImgH mr-12"
          src={productImg}
          alt="image of a book"
        />
        <h3 className="w-[180px] text-secBlack text-linkS font-secondarySBold">
          {name}
        </h3>
      </div>
      <ul className="flex items-center justify-between ">
        <li className="flex gap-gapS mr-[95px] items-center">
          <p>£{price}</p>
          <Edit className="cursor-pointer" />
        </li>
        <li className="flex gap-gapS mr-[120px] items-center">
          <Minus className="cursor-pointer" onClick={decrementQuantity} />
          <p>{quantityEl}</p>
          <Plus className="cursor-pointer" onClick={incrementQuantity} />
        </li>
        <li className="items-center w-10">£{totalEl}</li>
      </ul>
    </div>
  );
};
export default PurchaseEl;
