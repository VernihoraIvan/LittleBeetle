import { NavLink } from "react-router-dom";
import { useCart } from "@/zustand/productStore";
import CrossIcon from "@/assets/icons/burger-cross.svg?react";

interface MobileHeaderProps {
  onClickHandler: (event: React.MouseEvent) => void;
}

const MobileHeader = ({ onClickHandler }: MobileHeaderProps) => {
  const products = useCart((state) => state.items);
  return (
    <div className="absolute bg-primPurple h-screen top-0 w-[240px] right-0 pl-[30px] pt-[90px]">
      <div
        className=" absolute top-10 right-5"
        onClick={(e) => onClickHandler(e)}
      >
        <CrossIcon className="fill-white cursor-pointer" />
      </div>
      <ul
        onClick={(e) => onClickHandler(e)}
        className="mr-navMar flex flex-col w-full justify-between gap-[30px] "
      >
        <li className="cursor-pointer">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-hovYellow" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={"/donation"}
            className={({ isActive }) => (isActive ? "text-hovYellow" : "")}
          >
            Your Support
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={"/creators"}
            className={({ isActive }) => (isActive ? "text-hovYellow" : "")}
          >
            Creators
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "text-hovYellow" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li
          className="mr-10 fill-primWhite flex gap-2 items-center cursor-pointer
           "
        >
          <div>
            {/* <NavLink to={"/checkout-donation/contribution"}>
              {({ isActive }) =>
                isActive ? (
                  <div className="flex items-center gap-2">
                    <ActiveCartLogo
                      className="w-5 h-5 
          smd:w-5 smd:h-5"
                    />
                    <p>Cart</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CartLogo
                      className="w-5 h-5 
          smd:w-5 smd:h-5"
                    />
                    <p>Cart</p>
                  </div>
                )
              }
            </NavLink> */}
            <NavLink
              to={
                products.length > 0
                  ? "/checkout/contribution"
                  : "/checkout-donation/contribution"
              }
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "text-hovYellow " : "text-primWhite"
              }
            >
              Donate now
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default MobileHeader;
