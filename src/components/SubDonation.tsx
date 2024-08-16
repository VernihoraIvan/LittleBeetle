import { useState } from "react";
import { SubDonationProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import PopUpPrice from "./PopUpPrice";
import PopUpLang from "./PopUpLang";
import clsx from "clsx";
import QuantityAdjuster from "./QuantityAdjusterWState";
import Carousel from "./Carousel";
import ButtonTo from "./ButtonTo";
import { useShipment } from "@/zustand/shipmentStore";
import { nanoid } from "nanoid";

const SubDonation = ({ title, description, imagePath }: SubDonationProps) => {
  const addProduct = useCart((state) => state.addToCart);
  const setFee = useShipment((state) => state.setFee);
  const id = nanoid();

  const [isOverlayPrice, setIsOverlayPrice] = useState<boolean>(false);
  const [isOverlayLang, setIsOverlayLang] = useState<boolean>(false);

  const [price, setPrice] = useState<number>(0);
  const [lang, setLang] = useState<string>("en");
  const [quantity, setQuantity] = useState<number>(1);

  const handleOverlayPrice = () => {
    setIsOverlayPrice(!isOverlayPrice);
  };

  const handleOverlayLang = () => {
    setIsOverlayLang(!isOverlayLang);
  };

  const handleAddProduct = (
    title: string,
    price: number,
    quantity: number,
    lang: string,
    id: string
  ) => {
    if (price > 2) {
      console.log(title, quantity, price, lang, false, id);
      addProduct(title, quantity, price, lang, false, id);
      console.log(id);
      setPrice(0);
      setIsOverlayPrice(false);
      setFee(id, price, quantity);
      setQuantity(1);
    }
  };

  return (
    <>
      <section className="h-headerPad bg-primPurple" />
      <section className="flex justify-center pt-bookPT bg-primBeige w-screen  h-secH ">
        <div className=" xxl:w-contW flex gap-8">
          <Carousel images={imagePath} />
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
                  onClick={() =>
                    handleAddProduct(title, price, quantity, lang, id)
                  }
                  className="hover:bg-whiteHover transition duration-300 w-full font-secondarySBold text-primPurple border border-primPurple text-addCartS bg-primWhite py-3 px-14"
                >
                  Add to Cart
                </button>
                <ButtonTo
                  to="/checkout/contribution"
                  style="hover:bg-purpleHover text-center transition duration-300 w-full  font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14"
                  title="Checkout"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubDonation;
