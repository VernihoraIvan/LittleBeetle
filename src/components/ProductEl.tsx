import { useState } from "react";
import Chevron from "@/assets/icons/chevron.svg?react";
import OverlayComp from "@/components/OverlayComp";
import productImg from "@/assets/images/product.png";
import { ProductElProps } from "@/utilities/interfaces";

const ProductEl = ({ title, description }: ProductElProps) => {
  const [isOverlay, setIsOverlay] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const handleOverlay = () => {
    setIsOverlay(!isOverlay);
  };

  console.log(price);
  return (
    <li className="w-prodW">
      <img src={productImg} alt="image of a book" />
      <h3 className="border-b border-primPurple mt-prodMar leading-relaxed text-secBlack text-buttonS font-secondaryBold">
        {title}
      </h3>
      <p className="text-2xl font-secondaryRegular">{description}</p>
      <div className="flex justify-between mt-9">
        <div
          onClick={handleOverlay}
          className="cursor-pointer flex justify-between w-priceL border border-primPurpleFaintM py-3 px-4 bg-primWhite"
        >
          <p className="text-addCartS font-secondaryRegular text-inputPink">
            {price !== 0 ? `£${price}` : "Choose a price"}
          </p>
          <Chevron />
        </div>
        <OverlayComp
          handleOverlay={handleOverlay}
          setOverlay={setIsOverlay}
          setPrice={setPrice}
          isOverlay={isOverlay}
          price={price}
        />
        <button className="font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14">
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ProductEl;
