import clsx from "clsx";
import { OverlayProps } from "@/utilities/interfaces";
import { useCallback, useEffect, useRef } from "react";
// import { useState } from "react";

const OverlayComp = ({
  isOverlay,
  setPrice,
  handleOverlay,
  price,
  setOverlay,
}: OverlayProps) => {
  // const [inputPrice, setInputPrice] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Escape" || e.code === "Enter") {
        handleOverlay();
      }
    },
    [handleOverlay]
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (
      elementRef.current &&
      !elementRef.current.contains(event.target as Node)
    ) {
      setOverlay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOverlay) {
      window.addEventListener("keydown", handleKeydown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown, isOverlay]);

  return (
    <>
      <div className="absolute mt-16 overflow-hidden ">
        <div
          ref={elementRef}
          className={clsx(
            "bg-primWhite font-secondaryRegular text-inputPink text-2xl  border border-primPurpleFaintM w-priceL transition-transform duration-300",
            isOverlay ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="overlay-container cursor-pointer">
            <ul className="px-4 overlay  " onClick={() => handleOverlay()}>
              <li
                value={3}
                className="py-2 "
                onClick={(event) => setPrice(event.currentTarget.value)}
              >
                £3
              </li>
              <li
                value={5}
                className="py-2 "
                onClick={(event) => setPrice(event.currentTarget.value)}
              >
                £5
              </li>
              <li
                value={10}
                className="py-2 "
                onClick={(event) => setPrice(event.currentTarget.value)}
              >
                £10
              </li>
            </ul>
            <div className="flex justify-between py-2 px-4">
              <label className="">
                Enter your own amount
                <input
                  className="w-40 h-10 border border-primPurpleFaintM px-3 ml-4"
                  type="text"
                  name=""
                  id="priceInput"
                  placeholder="£"
                  value={price ? price : ""}
                  onChange={(event) => setPrice(Number(event.target.value))}
                ></input>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayComp;
