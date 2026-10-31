import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navLinks";
import clsx from "clsx";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // close on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("overflow-y-hidden");
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("overflow-y-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="icon-btn text-primWhite hover:bg-primWhite/10"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 animate-fade-in bg-primPurple/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute inset-y-0 right-0 flex w-[min(320px,85vw)] animate-slide-in-right flex-col bg-primPurple px-6 pb-8 pt-5 shadow-lift"
          >
            <button
              type="button"
              className="icon-btn self-end text-primWhite hover:bg-primWhite/10"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <ul className="mt-6 flex flex-col gap-1 font-primarySBold text-xl">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end
                    className={({ isActive }) =>
                      clsx(
                        "block rounded-xl px-4 py-3 transition-colors duration-200",
                        isActive
                          ? "bg-primWhite/10 text-hovYellow"
                          : "text-primWhite hover:bg-primWhite/5"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink
              to="/checkout-donation/contribution"
              className="btn-accent btn-lg mt-auto w-full"
            >
              Donate now
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
export default BurgerMenu;
