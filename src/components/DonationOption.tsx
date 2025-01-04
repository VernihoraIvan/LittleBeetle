import { nanoid } from "nanoid";
import { useDonation } from "@/zustand/donationStore";
import { DonationOptionProps } from "@/utilities/interfaces";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
    <div className="">
      <h3 className="font-secondaryBold text-buttonS mb-4">
        Select options for donation
      </h3>
      {/* <PopUp
        defaultVal={"Language"}
        setValue={setLang}
        value={["English", "Ukrainian"]}
      />
      <PopUp
        defaultVal={"Donation Amount"}
        setValue={setPrice}
        value={[3, 5, 10]}
      /> */}
      <div className="flex flex-col justify-between mt-2 ">
        <Select onValueChange={(value) => setPrice(Number(value))}>
          <SelectTrigger className="w-full bg-white xl:h-[45px] xxl:h-[63px]">
            <SelectValue placeholder="Donation Amount" />
          </SelectTrigger>
          <SelectContent className="w-full bg-white cursor-pointer">
            <SelectItem
              className="cursor-pointer xl:h-[45px] xxl:h-[63px]"
              value="3"
            >
              3
            </SelectItem>
            <SelectItem
              className="cursor-pointer xl:h-[45px] xxl:h-[63px]"
              value="5"
            >
              5
            </SelectItem>
            <SelectItem
              className="cursor-pointer xl:h-[45px] xxl:h-[63px]"
              value="10"
            >
              10
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative w-full mt-[10px] big-responsive-text">
        <Select onValueChange={(value) => setLang(value)}>
          <SelectTrigger className="w-full bg-white xl:h-[45px] xxl:h-[63px] ">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent className="w-full bg-white ">
            <SelectItem
              className="cursor-pointer xl:h-[45px] xxl:h-[63px]"
              value="English"
            >
              English
            </SelectItem>
            <SelectItem
              className="cursor-pointer xl:h-[45px] xxl:h-[63px]"
              value="Ukrainian"
            >
              Ukrainian
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
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
