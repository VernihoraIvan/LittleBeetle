import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Chevron from "@/assets/icons/chevron.svg?react";
import PopUpEl from "./PopUpElTest";
import { useRef, useState } from "react";
import { PopupActions } from "reactjs-popup/dist/types";

interface PopUpProps {
  setValue: (value: string | number) => void;
  value: (string | number)[];
  defaultVal: string | number;
}

const PopUpCustom = ({ setValue, value, defaultVal }: PopUpProps) => {
  const [defaultV, setDefault] = useState<string | number>(defaultVal);
  const [price, setPrice] = useState<number>(0);
  const popupRef = useRef<PopupActions | null>(null);

  const handleOnChange = (amount: number) => {
    if (typeof amount === "number") {
      if (amount >= 3) {
        setValue(amount);
        setDefault(amount);
      }
      setPrice(amount);
    }
  };

  const handleClose = (value: string | number) => {
    if (popupRef.current) {
      popupRef.current.close();
    }
    setValue(value);
  };
  const valueIsNumber = typeof value[0] === "number";

  return (
    <div className="relative">
      <div className="tooltipBoundary relative ">
        <Popup
          nested
          trigger={
            <div
              className="menu-item hover:bg-dropHover transition duration-300 cursor-pointer flex justify-between w-full border border-primPurpleFaintM py-3 px-4 mb-5 bg-primWhite 
        xl:py-2 xl:px-3 
        lg:py-[6px] lg:px-[8px]
        smd:py-[6px] smd:px-[8px]"
            >
              <p
                className="leading-[150%] text-addCartS font-secondaryRegular text-inputPink 
                          xl:text-copyS 
                          lg:text-[14px] md:text-[14px]
                          smd:text-[14px]"
              >
                {valueIsNumber
                  ? !isNaN(defaultV as number)
                    ? `£ ${defaultV}`
                    : defaultVal
                  : defaultV}
              </p>
              <Chevron className=" xl:h-[21px] lg:h-[16px] md:h-[16px]" />
            </div>
          }
          position="bottom left"
          on="click"
          closeOnDocumentClick={true}
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{
            padding: "0px",
            border: "none",
            boxSizing: "border-box",
          }}
          className="popup-container-one "
          arrow={false}
          ref={popupRef}
        >
          <div className=" menu w-full font-secondaryRegular text-inputPink text-[24px] border border-primPurpleFaintM">
            {value.map((val) => (
              <PopUpEl
                key={val}
                value={val}
                setValue={handleClose}
                setDefault={setDefault}
              />
            ))}
            {valueIsNumber && (
              <div
                className="flex justify-between py-2 px-4 hover:bg-dropHover transition duration-300 cursor-pointer
              xl:py-2 xl:px-3 
              lg:py-[6px] lg:px-[8px]
              smd:py-[6px] smd:px-[8px]"
              >
                <label
                  className="cursor-pointer xl:text-copyS 
                  lg:text-[14px] 
                  md:text-[14px]
                  smd:text-[14px]"
                >
                  Enter your own amount
                  <input
                    className="w-40 h-10 border border-primPurpleFaintM px-3 ml-4 cursor-pointer"
                    type="text"
                    name="priceInput"
                    placeholder="£"
                    value={price ? price : ""}
                    onChange={(event) =>
                      handleOnChange(Number(event.target.value))
                    }
                  ></input>
                </label>
              </div>
            )}
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default PopUpCustom;
