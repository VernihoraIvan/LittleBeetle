import { useEffect, useRef, useState } from "react";
import BurgerMenuIcon from "@/assets/icons/burger-menu.svg?react";
import MobileHeader from "./MobileHeader";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickAway = (event: React.MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const onClickHandler = (event: React.MouseEvent) => {
    handleClickAway(event);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="hidden xs:block">
      <button onClick={() => setIsOpen(!isOpen)}>
        <BurgerMenuIcon />
      </button>
      {isOpen && <MobileHeader onClickHandler={onClickHandler} />}
    </div>
  );
};
export default BurgerMenu;
