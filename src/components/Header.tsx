// / <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import Chevron from "../assets/icons/chevron-down.svg?react";
import Cart from "../assets/icons/shopping-cart.svg?react";

const Header = () => {
  return (
    <header className="font-primaryBold z-10 flex flex-center justify-center absolute w-full pt-navPad">
      <nav className="w-contW flex flex-row  text-primWhite text-xl">
        <ul className="mr-navMar flex flex-row w-full justify-between">
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/donation"}>Shop / Donation</NavLink>
          </li>
          <li>
            <NavLink to={"/creators"}>Creators</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <ul className="flex flex-row">
          <li className="mr-10 fill-primWhite w-6 h-6">
            <Cart />
          </li>
          <li className="mr-2">EN</li>
          <li className="w-6 h-6">
            <Chevron />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
