import clsx from "clsx";
import { OverlayLangProps } from "@/utilities/interfaces";
import { useCallback, useEffect, useRef, useState } from "react";

const OverlayCompLang = ({
  isOverlayLang,
  setLang,
  handleOverlayLang,
  setIsOverlayLang,
}: OverlayLangProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [tempLang, setTempLang] = useState<number>(1);

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Escape" || e.code === "Enter") {
        handleOverlayLang();
      }
    },
    [handleOverlayLang]
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (
      elementRef.current &&
      !elementRef.current.contains(event.target as Node)
    ) {
      setIsOverlayLang(false);
    }
  };

  useEffect(() => {
    if (tempLang === 1) {
      setLang("English");
    } else if (tempLang === 2) {
      setLang("Ukrainian");
    }
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOverlayLang) {
      window.addEventListener("keydown", handleKeydown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown, isOverlayLang]);

  return (
    <>
      <div ref={elementRef} className="absolute  mt-16 overflow-hidden w-full">
        <div
          className={clsx(
            "  bg-primWhite font-secondaryRegular text-inputPink text-[24px]  border border-primPurpleFaintM w-prodW  transition-transform duration-0",
            isOverlayLang
              ? "translate-y-0 /*pointer-events-none*/"
              : "-translate-y-full"
          )}
        >
          <div className="overlay-container cursor-pointer  w-full">
            <ul className=" overlay  " onClick={() => handleOverlayLang()}>
              <li
                value={1}
                className="py-2 hover:bg-dropHover transition duration-300 px-4"
                onClick={(e) => setTempLang(e.currentTarget.value)}
              >
                English
              </li>
              <li
                value={2}
                className="py-2 hover:bg-dropHover transition duration-300 px-4"
                onClick={(event) => setTempLang(event.currentTarget.value)}
              >
                Ukrainian
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayCompLang;
