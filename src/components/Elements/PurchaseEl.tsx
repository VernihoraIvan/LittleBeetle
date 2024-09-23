import CrossLogo from "@/assets/icons/cross.svg?react";
import { PurchaseElProps } from "@/utilities/interfaces";
import { useEffect, useState } from "react";
import { useCart } from "@/zustand/productStore";
import QuantityAdjuster from "@/components/QuantityAdjuster";
import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";

const PurchaseEl = ({
  name,
  price,
  total,
  imgPath,
  id,
  language,
}: PurchaseElProps) => {
  const removeProduct = useCart((state) => state.removeFromCart);
  const quantityEl = useCart(
    (state) => state.items.find((item) => item.id === id)?.quantity
  );
  const removeFee = useShipment((state) => state.removeFee);
  const { setAGift } = useCart();
  const setStage = useStage((state) => state.setStage);
  const product = useCart((state) => state.items);
  const [productState, setProductState] = useState(product);

  const [totalEl, setTotal] = useState<number>(total);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const removeProductHandler = () => {
    removeProduct(id);
    removeFee(id);
    setStage(1);
    setProductState((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (quantityEl) {
      setTotal(price * quantityEl);
    }
  }, [quantityEl, price]);

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

  return (
    <div className="relative mt-10 mb-prodMar flex justify-between w-full pr-6 ">
      <CrossLogo
        className="cursor-pointer absolute left-[-60px]
        xl:left-[-40px]
        lg:left-[-40px]
        sm:hidden"
        onClick={removeProductHandler}
      />
      <CrossLogo
        className="cursor-pointer hidden absolute right-[20px]
        sm:block"
        onClick={removeProductHandler}
      />
      <div className="flex items-center sm:items-end">
        {imgPath && (
          <img
            className=" mr-12 w-imgSW
            xl:w-[185px] xl:mr-5
            lg:w-[185px] lg:mr-5
            md:w-[135px] md:mr-5
            sm:w-[100px] sm:h-[80px] sm:mr-3"
            src={imgPath[0]}
            alt="image of a book"
          />
        )}
        {/* <h3 className="w-[180px] text-secBlack text-linkS font-secondarySBold">
          {name}
        </h3> */}
        <div className="flex flex-col">
          <h3
            className="w-[180px] text-secBlack text-linkS font-secondarySBold
            xl:text-[18px]
            lg:text-[16px]
            smd:text-[16px]
            "
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
          <p
            className="items-center hidden w-10 text-copyS font-secondarySBold sm:block
          xl:text-[16px]
              lg:text-[14px]
              smd:text-[14px]"
          >
            £{total}
          </p>
          <div className="flex items-center">
            <label
              className="font-secondaryRegular text-[20px] hover:cursor-pointer
              xl:text-[16px]
              lg:text-[14px]
              smd:text-[14px]"
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
        <div className="hidden sm:block">
          <QuantityAdjuster id={id} />
        </div>
      </div>
      <ul className="flex items-center justify-between select-none sm:hidden">
        <li
          className="flex gap-gapS mr-[95px] items-center 
        xl:mr-[40px] lg:mr-[40px] smd:mr-[40px] "
        >
          <p
            className="xl:text-[16px]
              lg:text-[14px]
              md:text-[14px]"
          >
            £{price}
          </p>
        </li>
        <li className="relative sm:hidden">
          <QuantityAdjuster id={id} />
        </li>
        <li
          className="items-center w-10
        xl:text-[16px]
              lg:text-[14px]
              md:text-[14px]"
        >
          £{totalEl}
        </li>
      </ul>
    </div>
  );
};
export default PurchaseEl;
