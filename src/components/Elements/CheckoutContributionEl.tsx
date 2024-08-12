import { CheckoutContributionElProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import { useState } from "react";

const CheckoutContributionEl = ({
  name,
  total,
  imgPath,
  language,
  id,
}: CheckoutContributionElProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { setAGift } = useCart();
  const product = useCart((state) => state.items);

  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.currentTarget.value);
  //   setAGift(event.target.value);
  //   setIsChecked(!isChecked);
  // };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setAGift(id, checked);
    console.log(product);
  };

  return (
    <div className="relative mt-10 mb-prodMar flex justify-between w-full pr-6 ">
      <div className="flex items-center">
        {imgPath && (
          <img
            className="h-purchImgH mr-12 w-imgSW"
            src={imgPath[0]}
            alt="image of a book"
          />
        )}
        <div className="flex gap-20">
          <div className="flex flex-col">
            <h3 className="w-[180px] text-secBlack text-linkS font-secondarySBold">
              {name}
            </h3>
            {name !== "Postcards" && (
              <h4 className="mb-2 text-inputPink text-base font-secondaryRegular ">
                Language: {language}
              </h4>
            )}
            <p className="items-center w-10 text-copyS font-secondarySBold">
              £{total}
            </p>
          </div>
          <div className="flex items-center ml-8 ">
            <label
              className="font-secondaryRegular text-xl hover:cursor-pointer"
              htmlFor={id}
            >
              <input
                className="mr-2 hover:cursor-pointer "
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
      </div>
    </div>
  );
};

export default CheckoutContributionEl;
