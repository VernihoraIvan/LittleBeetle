import Chevron from "@/assets/icons/chevron.svg?react";
import OverlayComp from "./OverlayComp";
import { PopUpPriceProps } from "@/utilities/interfaces";
import clsx from "clsx";

const PopUpPrice = ({
  handleOverlay,
  price,
  setIsOverlay,
  setPrice,
  isOverlay,
  isOverlayLang,
}: PopUpPriceProps) => {
  return (
    <>
      <div
        onClick={handleOverlay}
        className={clsx(
          "cursor-pointer flex justify-between w-full border border-primPurpleFaintM py-3 px-4  bg-primWhite",
          isOverlayLang ? "" : "relative"
        )}
        // className=" cursor-pointer flex justify-between w-full border border-primPurpleFaintM py-3 px-4  bg-primWhite"
      >
        <p className="text-addCartS font-secondaryRegular text-inputPink">
          {price ? `£${price}` : "Choose a price"}
        </p>
        <Chevron />
      </div>
      <div className="relative">
        <OverlayComp
          handleOverlay={handleOverlay}
          setOverlay={() => setIsOverlay}
          setPrice={setPrice}
          isOverlay={isOverlay}
          price={price}
          isOverlayLang={isOverlayLang}
        />
      </div>
    </>
  );
};
export default PopUpPrice;
