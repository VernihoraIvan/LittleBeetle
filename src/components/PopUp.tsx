import Chevron from "@/assets/icons/chevron.svg?react";
import OverlayComp from "./OverlayComp";
import { PopUpProps } from "@/utilities/interfaces";

const PopUp = ({
  handleOverlay,
  price,
  setIsOverlay,
  setPrice,
  isOverlay,
}: PopUpProps) => {
  return (
    <>
      <div
        onClick={handleOverlay}
        className="cursor-pointer flex justify-between w-priceL border border-primPurpleFaintM py-3 px-4 bg-primWhite"
      >
        <p className="text-addCartS font-secondaryRegular text-inputPink">
          {price ? `£${price}` : "Choose a price"}
        </p>
        <Chevron />
      </div>
      <OverlayComp
        handleOverlay={handleOverlay}
        setOverlay={() => setIsOverlay}
        setPrice={setPrice}
        isOverlay={isOverlay}
        price={price}
      />
    </>
  );
};
export default PopUp;
