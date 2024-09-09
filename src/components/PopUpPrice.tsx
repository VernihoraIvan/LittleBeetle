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
          "hover:bg-dropHover transition duration-300 cursor-pointer flex justify-between w-full border border-primPurpleFaintM py-3 px-4  bg-primWhite xl:py-2 xl:px-3 lg:py-[6px] lg:px-[8px]",
          isOverlayLang ? "" : "relative"
        )}
      >
        <p className="text-addCartS font-secondaryRegular text-inputPink xl:text-copyS lg:text-[14px] md:text-[14px]">
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
        />
      </div>
    </>
  );
};
export default PopUpPrice;
