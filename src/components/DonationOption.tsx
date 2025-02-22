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
import { useRef, useState } from "react";
import Alert from "@/assets/icons/alert-circle.svg?react";

const DonationOption = ({
  setLang,
  setPrice,
  setIsChecked,
  checkboxIsHidden,
}: DonationOptionProps) => {
  const [customPrice, setCustomPrice] = useState<number | null>(null);

  const priceRef = useRef<number>(0);

  const id = nanoid();
  let isChecked;

  const handleOnCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCustomPrice(value === "" ? 0 : Number(value));
    const newPrice = value === "" ? 0 : Number(value);
    setPrice(newPrice);
    priceRef.current = newPrice;
  };

  const setAGift = useDonation((state) => state.setAGift);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setAGift(id, checked);
  };

  const handleSetPrice = (price: number) => {
    setPrice(price);
    setCustomPrice(0);
    priceRef.current = price;
  };
  const priceToShow =
    priceRef.current > 0 ? `${priceRef.current} £` : "Donation Amount";

  return (
    <div className="w-full">
      <h3 className="font-secondaryBold responsive-heading mb-4">
        Please select your donation amount and the language for the products
        included in your donation package.
      </h3>
      <div className="smd:w-full w-[420px] ">
        <div className="flex flex-col justify-between mt-2 ">
          <Select onValueChange={(value) => handleSetPrice(Number(value))}>
            <SelectTrigger className="w-full bg-white xl:h-[45px] xxl:h-[63px]">
              <SelectValue placeholder={priceToShow} />
            </SelectTrigger>
            <SelectContent className="w-full bg-white cursor-pointer">
              <SelectItem
                className="cursor-pointer xl:h-[45px] xxl:h-[63px]"
                value="3"
              >
                3 £
              </SelectItem>
              <SelectItem
                className="cursor-pointer xl:h-[45px] xxl:h-[63px]"
                value="5"
              >
                5 £
              </SelectItem>
              <SelectItem
                className="cursor-pointer xl:h-[45px] xxl:h-[63px]"
                value="10"
              >
                10 £
              </SelectItem>
              <div className="flex  justify-between gap-2 px-2 hover:bg-dropHover transition duration-300">
                <label htmlFor="customPrice" className="cursor-pointer">
                  Enter your own amount
                </label>
                <div className=" py-1">
                  <input
                    id="customPrice"
                    autoComplete="off"
                    className="w-40 sm:w-20 sm:py-1 px-3 h-10 border border-primPurpleFaintM  "
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="priceInput"
                    placeholder="£"
                    value={customPrice || ""}
                    onChange={(e) => handleOnCustomChange(e)}
                  ></input>
                  <div className="flex items-center gap-1">
                    <Alert className="w-4 h-4 text-inputPink" />
                    <p className="text-sm text-inputPink min:block hidden">
                      Minimum Donation: £3
                    </p>
                    <p className="text-sm text-inputPink block min:hidden">
                      Min. Don.: £3
                    </p>
                  </div>
                </div>
              </div>
            </SelectContent>
          </Select>
        </div>
        <div className="relative w-full mt-[10px] big-responsive-text">
          <Select onValueChange={(value) => setLang(value)}>
            <SelectTrigger className="w-full bg-white xl:h-[45px] xxl:h-[63px] ">
              <SelectValue placeholder="English" />
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
