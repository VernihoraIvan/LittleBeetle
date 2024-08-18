import { nanoid } from "nanoid";
import PopUpLang from "./PopUpLang";
import PopUpPrice from "./PopUpPrice";
import { useDonation } from "@/zustand/donationStore";
import { DonationOptionProps } from "@/utilities/interfaces";
import clsx from "clsx";

const DonationOption = ({
  handleOverlayLang,
  lang,
  setIsOverlayLang,
  setLang,
  isOverlayLang,
  handleOverlayPrice,
  price,
  isOverlayPrice,
  setPrice,
  setIsOverlayPrice,
  setIsChecked,
}: DonationOptionProps) => {
  const id = nanoid();
  let isChecked;

  const setAGift = useDonation((state) => state.setAGift);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setAGift(id, checked);
  };

  return (
    <div className="w-[720px]">
      <h3 className="font-secondaryBold text-buttonS mb-4">
        Select options for donation
      </h3>
      <PopUpLang
        handleOverlayLang={handleOverlayLang}
        lang={lang}
        setIsOverlayLang={setIsOverlayLang}
        setLang={setLang}
        isOverlayLang={isOverlayLang}
      />
      <PopUpPrice
        handleOverlay={handleOverlayPrice}
        price={price}
        setIsOverlay={setIsOverlayPrice}
        setPrice={setPrice}
        isOverlay={isOverlayPrice}
        isOverlayLang={isOverlayLang}
      />
      <div
        className={clsx(
          "flex items-center  mt-9",
          isOverlayPrice || isOverlayLang ? "static" : "relative"
        )}
      >
        <label
          className="font-secondaryRegular text-2xl hover:cursor-pointer"
          htmlFor={id}
        >
          <input
            className="mr-2 hover:cursor-pointer transform scale-150"
            type="checkbox"
            id={id}
            name="option"
            value={id}
            checked={isChecked}
            onChange={(e) => handleCheckboxChange(e)}
          />
          it's a gift
        </label>
      </div>
    </div>
  );
};

export default DonationOption;
