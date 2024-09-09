import Chevron from "@/assets/icons/chevron.svg?react";
import { PopUpLangProps } from "@/utilities/interfaces";
import OverlayCompLang from "./OverlayCompLang";

const PopUpLang = ({
  handleOverlayLang,
  lang,
  setIsOverlayLang,
  setLang,
  isOverlayLang,
}: PopUpLangProps) => {
  return (
    <>
      <div
        onClick={handleOverlayLang}
        className="hover:bg-dropHover transition duration-300 cursor-pointer flex justify-between w-full border border-primPurpleFaintM py-3 px-4 mb-5 bg-primWhite 
        xl:py-2 xl:px-3 
        lg:py-[6px] lg:px-[8px]
        "
      >
        <p
          className="leading-[150%] text-addCartS font-secondaryRegular text-inputPink 
        xl:text-copyS lg:text-[14px] md:text-[14px]"
        >
          {lang ? `${lang}` : "Language"}
        </p>
        <Chevron />
      </div>
      <OverlayCompLang
        handleOverlayLang={handleOverlayLang}
        setIsOverlayLang={() => setIsOverlayLang}
        setLang={setLang}
        isOverlayLang={isOverlayLang}
        lang={lang}
      />
    </>
  );
};
export default PopUpLang;
