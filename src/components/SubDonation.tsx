import { useState } from "react";
import { SubDonationProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/store";
import PopUp from "./PopUp";

const SubDonation = ({ title, description, imagePath }: SubDonationProps) => {
  const addProduct = useCart((state) => state.addToCart);

  const [isOverlay, setIsOverlay] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  const handleOverlay = () => {
    setIsOverlay(!isOverlay);
  };

  const handleAddProduct = (title: string, price: number) => {
    if (price > 2) {
      addProduct(title, 1, price);
      setPrice(0);
      setIsOverlay(false);
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
            <div className="flex justify-between mt-9">
              <PopUp
                handleOverlay={handleOverlay}
                price={price}
                setIsOverlay={setIsOverlay}
                setPrice={setPrice}
                isOverlay={isOverlay}
              />
              <button
                onClick={() => handleAddProduct(title, price)}
                className="font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubDonation;
