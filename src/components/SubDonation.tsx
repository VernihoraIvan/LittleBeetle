import { useState } from "react";
import { SubDonationProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/store";
import PopUpPrice from "./PopUpPrice";
import PopUpLang from "./PopUpLang";
import clsx from "clsx";
import QuantityAdjuster from "./QuantityAdjusterWState";

const SubDonation = ({ title, description, imagePath }: SubDonationProps) => {
  const addProduct = useCart((state) => state.addToCart);

  const [isOverlayPrice, setIsOverlayPrice] = useState<boolean>(false);
  const [isOverlayLang, setIsOverlayLang] = useState<boolean>(false);

  const [price, setPrice] = useState<number>(0);
  const [lang, setLang] = useState<string>("en");
  const [quantity, setQuantity] = useState<number>(0);

  const handleOverlayPrice = () => {
    setIsOverlayPrice(!isOverlayPrice);
  };

  const handleOverlayLang = () => {
    setIsOverlayLang(!isOverlayLang);
  };

  const handleAddProduct = (title: string, price: number) => {
    if (price > 2) {
      addProduct(title, quantity, price, lang);
      setPrice(0);
      setIsOverlayPrice(false);
    }
  };

  return (
    <>
      <section className="h-headerPad bg-primPurple" />
      <section className="flex justify-center pt-bookPT bg-primBeige w-screen  h-secH ">
        <div className=" xxl:w-contW flex gap-8">
          <img
            src={imagePath}
            alt="image of a book"
            className="w-prodW h-imgH"
          />
          <div className="w-prodW">
            <h3 className="border-b border-primPurple mt-prodMar leading-relaxed text-secBlack text-buttonS font-secondaryBold">
              {title}
            </h3>
            <p className="text-2xl font-secondaryRegular">{description}</p>
            <div className="flex flex-col justify-between mt-9 ">
              <PopUpLang
                handleOverlayLang={handleOverlayLang}
                lang={lang}
                setIsOverlayLang={setIsOverlayLang}
                setLang={setLang}
                isOverlayLang={isOverlayLang}
              />
              <PopUpPrice
                handleOverlay={handleOverlayPrice}
                price={price}
                setIsOverlay={setIsOverlayPrice}
                setPrice={setPrice}
                isOverlay={isOverlayPrice}
                isOverlayLang={isOverlayLang}
              />
              <div className="flex gap-6 mt-6  select-none">
                <p className="font-secondaryRegular text-addCartS text-inputPink">
                  Quantity
                </p>
                <QuantityAdjuster
                  isOverlay={isOverlayPrice}
                  name={title}
                  price={price}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </div>
              <div
                className={clsx(
                  "flex gap-5 mt-8",
                  isOverlayPrice ? "" : "relative"
                )}
              >
                <button
                  onClick={() => handleAddProduct(title, price)}
                  className="w-full font-secondarySBold text-primPurple border border-primPurple text-addCartS bg-primWhite py-3 px-14"
                >
                  Add to Cart
                </button>
                <button className="w-full  font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubDonation;
