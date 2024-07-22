import Chevron from "@/assets/icons/chevron.svg?react";
// import OverlayComp from "./OverlayComp";
import { PopUpLangProps } from "@/utilities/interfaces";
import OverlayCompLang from "./OverlayCompLang";

const PopUpLang = ({
  handleOverlayLang,
  lang,
  setIsOverlayLang,
  setLang,
  isOverlayLang,
}: PopUpLangProps) => {
  console.log(lang);
  console.log(isOverlayLang);

  return (
    <>
      <div
        onClick={handleOverlayLang}
        className="cursor-pointer flex justify-between w-full border border-primPurpleFaintM py-3 px-4 mb-5 bg-primWhite "
      >
        <p className="text-addCartS font-secondaryRegular text-inputPink">
          {lang ? `${lang}` : "Choose a price"}
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
