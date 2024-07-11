import clsx from "clsx";
import { OverlayProps } from "@/utilities/interfaces";

const OverlayComp = ({ isOverlay }: OverlayProps) => {
  return (
    <>
      <div className="absolute mt-16 overflow-hidden ">
        <div
          className={clsx(
            "bg-primWhite font-secondaryRegular text-inputPink text-2xl  border border-primPurpleFaintM w-priceL transition-transform duration-300",
            isOverlay ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="overlay-container ">
            <ul className="px-4 overlay  ">
              <li className="py-2 ">£3</li>
              <li className="py-2 ">£5</li>
              <li className="py-2 ">£10</li>
              <li className="flex justify-between py-2">
                <p>Enter your own amount</p>
                <input
                  className="w-40 h-10 border border-primPurpleFaintM px-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="£"
                ></input>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayComp;
