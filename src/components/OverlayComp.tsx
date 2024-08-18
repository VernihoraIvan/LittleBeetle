import clsx from "clsx";
import { OverlayProps } from "@/utilities/interfaces";
import { useCallback, useEffect, useRef } from "react";

const OverlayComp = ({
  isOverlay,
  setPrice,
  handleOverlay,
  price,
  setOverlay,
}: OverlayProps) => {
  const elementRefPrice = useRef<HTMLDivElement>(null);

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
      elementRefPrice.current &&
      !elementRefPrice.current.contains(event.target as Node)
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
    <div className="">
      <div className=" absolute /*pointer-events-none*/  overflow-hidden w-full ">
        <div
          ref={elementRefPrice}
          className={clsx(
            "  bg-primWhite font-secondaryRegular text-inputPink text-2xl  border border-primPurpleFaintM w-prodW  transition-transform duration-0",
            isOverlay ? "translate-y-0 " : "-translate-y-full block"
          )}
        >
          <div className=" overlay-container cursor-pointer  w-full">
            <ul className=" overlay  " onClick={() => handleOverlay()}>
              <li
                value={3}
                className="py-2 px-4 hover:bg-dropHover transition duration-300"
                onClick={(event) => setPrice(event.currentTarget.value)}
              >
                £3
              </li>
              <li
                value={5}
                className="py-2 px-4 hover:bg-dropHover transition duration-300"
                onClick={(event) => setPrice(event.currentTarget.value)}
              >
                £5
              </li>
              <li
                value={10}
                className="py-2 px-4 hover:bg-dropHover transition duration-300"
                onClick={(event) => setPrice(event.currentTarget.value)}
              >
                £10
              </li>
            </ul>
            <div className="flex justify-between py-2 px-4 hover:bg-dropHover transition duration-300">
              <label>
                Enter your own amount
                <input
                  className="w-40 h-10 border border-primPurpleFaintM px-3 ml-4"
                  type="text"
                  name="priceInput"
                  placeholder="£"
                  value={price ? price : ""}
                  onChange={(event) => setPrice(Number(event.target.value))}
                ></input>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayComp;
