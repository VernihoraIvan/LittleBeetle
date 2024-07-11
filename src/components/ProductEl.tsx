import { useState } from "react";
import Chevron from "@/assets/icons/chevron.svg?react";
// import OverlayComp from "./OverlayComp";
import OverlayComp from "@/components/OverlayComp";

const ProductEl = () => {
  const [isOverlay, setIsOverlay] = useState<boolean>(false);
  const handleOverlay = () => {
    setIsOverlay(!isOverlay);
  };

  return (
    <li className="w-prodW">
      <img src="/src/assets/images/product.png" alt="" />
      <h3 className="border-b border-primPurple mt-prodMar leading-relaxed text-secBlack text-buttonS font-secondaryBold">
        The book
      </h3>
      <p className="text-2xl font-secondaryRegular">
        one sentence description one sentence description one sentence
        description one sentence description.
      </p>
      <div className="flex justify-between mt-9" onClick={handleOverlay}>
        <div className="flex justify-between w-priceL border border-primPurpleFaintM py-3 px-4 bg-primWhite">
          <p className="text-addCartS font-secondaryRegular text-inputPink">
            Choose the Price
          </p>
          <Chevron />
        </div>
        <OverlayComp isOverlay={isOverlay} /*handleOverlay={handleOverlay}*/ />
        <button className="font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14">
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ProductEl;
