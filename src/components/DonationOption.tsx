import { nanoid } from "nanoid";
import { useDonation } from "@/zustand/donationStore";
import { DonationOptionProps } from "@/utilities/interfaces";
import PopUp from "./PopUpTest";

const DonationOption = ({
  setLang,
  setPrice,
  setIsChecked,
  checkboxIsHidden,
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
      <PopUp
        defaultVal={"Language"}
        setValue={setLang}
        value={["English", "Ukrainian"]}
      />
      <PopUp
        defaultVal={"Donation Amount"}
        setValue={setPrice}
        value={[3, 5, 10]}
      />
      <div className="flex items-center  mt-9">
        {!checkboxIsHidden && (
          <label
            className="font-secondaryRegular text-[24px] hover:cursor-pointer"
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
        )}
      </div>
    </div>
  );
};

export default DonationOption;
