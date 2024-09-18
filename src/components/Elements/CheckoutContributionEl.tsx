import { CheckoutContributionElProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import { useEffect, useState } from "react";
import CrossLogo from "@/assets/icons//cross.svg?react";
import { useStage } from "@/zustand/stageStore";
import { useDonation } from "@/zustand/donationStore";

const CheckoutContributionEl = ({
  name,
  total,
  imgPath,
  language,
  id,
  isGiftpossible,
}: CheckoutContributionElProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { setAGift } = useCart();
  const product = useCart((state) => state.items);
  const setStage = useStage((state) => state.setStage);
  const [productState, setProductState] = useState(product);
  const removeProduct = useCart((state) => state.removeFromCart);

  useEffect(() => {
    const gift = product.find((item) => item.id === id);
    if (gift) {
      setIsChecked(gift.isAGift);
    }
  }, [product, id, productState]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setAGift(id, checked);
  };

  const removeDonation = useDonation((state) => state.removeDonation);
  const removeProductHandler = (id: string) => {
    removeDonation(id);
    removeProduct(id);
    setStage(1);
    setProductState((prev) => prev.filter((item) => item.id !== id));
    console.log("remove donation");
    console.log(productState);
  };

  return (
    <div className="relative mt-10 mb-prodMar flex justify-between w-full pr-6 ">
      <CrossLogo
        className="cursor-pointer absolute left-[-60px]
        xl:left-[-40px]
        lg:left-[-40px]"
        onClick={() => removeProductHandler(id)}
      />
      <div className="flex items-center">
        {imgPath && (
          <img
            className="h-purchImgH mr-12 w-imgSW
            "
            src={imgPath[0]}
            alt="image of a book"
          />
        )}
        <div className="flex gap-20">
          <div className="flex flex-col">
            <h3
              className="w-[180px] text-secBlack text-linkS font-secondarySBold
            xl:text-copyS
            lg:text-copyS"
            >
              {name}
            </h3>
            {name !== "Postcards" && (
              <h4
                className="mb-2 text-inputPink text-base font-secondaryRegular 
              xl:text-[12px]
              lg:text-[12px]"
              >
                Language: {language}
              </h4>
            )}
            <p className="items-center w-10 text-copyS font-secondarySBold">
              £{total}
            </p>
          </div>
          {isGiftpossible && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutContributionEl;
