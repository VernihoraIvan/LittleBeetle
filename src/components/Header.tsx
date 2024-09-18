// / <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import CartLogo from "@/assets/icons/shopping-cart.svg?react";
import ActiveCartLogo from "@/assets/icons/shopping-cart-active.svg?react";

const Header = () => {
  return (
    <header className="font-primaryBold z-10 flex flex-center justify-center absolute w-full py-navPad ">
      <nav className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS flex flex-row  text-primWhite text-xl">
        <ul className="mr-navMar flex flex-row w-full justify-between">
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "text-hovYellow" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/donation"}
              className={({ isActive }) => (isActive ? "text-hovYellow" : "")}
            >
              Shop / Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/creators"}
              className={({ isActive }) => (isActive ? "text-hovYellow" : "")}
            >
              Creators
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "text-hovYellow" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="flex flex-row ">
          <li className="mr-10 fill-primWhite w-6 h-6">
            <NavLink to={"/checkout/contribution"}>
              {({ isActive }) => (isActive ? <ActiveCartLogo /> : <CartLogo />)}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
