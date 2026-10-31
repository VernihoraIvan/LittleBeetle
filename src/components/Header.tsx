import { NavLink, useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import clsx from "clsx";
import { navLinkClass, navLinks } from "./navLinks";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/zustand/productStore";

const Header = () => {
  const { pathname } = useLocation();
  const isDonating = pathname.startsWith("/checkout-donation");
  const cartCount = useCart((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="surface-dark absolute inset-x-0 top-0 z-30">
      <nav
        aria-label="Main"
        className="page-container flex h-20 items-center justify-between font-primarySBold text-[15px] text-primWhite md:h-24 lg:text-base"
      >
        <ul className="hidden items-center gap-8 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-2">
          {cartCount > 0 && (
            <NavLink
              to="/checkout/contribution"
              aria-label={`Cart, ${cartCount} item${cartCount > 1 ? "s" : ""}`}
              className="icon-btn relative h-11 w-11 text-primWhite hover:bg-primWhite/10"
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute right-0.5 top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-hovYellow px-1 font-secondaryBold text-xs tabular-nums text-primPurple">
                {cartCount}
              </span>
            </NavLink>
          )}
          <NavLink
            to="/checkout-donation/contribution"
            className={clsx(
              "btn-accent min-h-[40px] px-5 py-2 text-[15px] md:min-h-[44px] md:px-6",
              isDonating && "ring-2 ring-primWhite/60"
            )}
          >
            Donate now
          </NavLink>
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
