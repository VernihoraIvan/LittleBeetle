import { useState } from "react";
import { SubDonationProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import clsx from "clsx";
import QuantityAdjuster from "./QuantityAdjusterWState";
import Carousel from "./Carousel";
import ButtonTo from "./ButtonTo";
import { useShipment } from "@/zustand/shipmentStore";
import { nanoid } from "nanoid";
import PopUp from "./PopUpTest";

const SubDonation = ({ title, description, imagePath }: SubDonationProps) => {
  const addProduct = useCart((state) => state.addToCart);
  const setFee = useShipment((state) => state.setFee);
  const id = nanoid();

  const [isOverlayPrice, setIsOverlayPrice] = useState<boolean>(false);

  const [price, setPrice] = useState<string | number>(0);
  const [lang, setLang] = useState<string | number>("English");
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddProduct = (
    title: string,
    price: number,
    quantity: number,
    lang: string,
    id: string
  ) => {
    if (price > 2) {
      // console.log(title, quantity, price, lang, false, id);
      addProduct(title, quantity, price, lang, false, id);
      // console.log(id);
      setPrice(0);
      setIsOverlayPrice(false);
      setFee(id, price, quantity);
      setQuantity(1);
    }
  };

  return (
    <>
      <section className="h-headerPad bg-primPurple  " />
      <section className="flex flex-grow justify-center p-[60px] bg-primBeige w-screen  h-fit-content ">
        <div
          className=" xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS flex gap-10
        md:flex-col md:w-[480px] "
        >
          <Carousel images={imagePath} />
          <div className=" popup-container          ">
            <h3
              className="border-b border-primPurple mt-prodMar leading-relaxed text-secBlack text-buttonS font-secondaryBold
            xl:text-linkS"
            >
              {title}
            </h3>
            <p className="text-[24px] font-secondaryRegular xl:text-copyS">
              {description}
            </p>
            <p className="text-[24px] font-secondaryRegular xl:text-copyS mt-1">
              Size: 21.0 x 29.7 cm
            </p>
            <div className="flex flex-col justify-between mt-2 ">
              <PopUp
                defaultVal={"Language"}
                setValue={setLang}
                value={["English", "Ukrainian"]}
              />
              <PopUp
                defaultVal={"Donation Amount"}
                setValue={setPrice}
                value={[3, 5, 10]}
              />
              <div
                className="flex gap-6 mt-6  select-none
              xl:mt-[18px]"
              >
                <p className="font-secondaryRegular text-addCartS text-inputPink xl:text-[18px]">
                  Quantity
                </p>
                <QuantityAdjuster
                  isOverlay={isOverlayPrice}
                  price={price as number}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </div>
              <div
                className={clsx(
                  "flex gap-5 mt-8 xl:mt-4",
                  isOverlayPrice ? "" : "relative"
                )}
              >
                <button
                  onClick={() =>
                    handleAddProduct(
                      title,
                      price as number,
                      quantity,
                      lang as string,
                      id
                    )
                  }
                  className="hover:bg-whiteHover transition duration-300 w-full font-secondarySBold text-primPurple border border-primPurple text-addCartS bg-primWhite py-3 px-14 
                  xl:text-[20px] xl:py-2
                  lg:text-[16px]"
                >
                  Add to Cart
                </button>
                <ButtonTo
                  to="/checkout/contribution"
                  style="hover:bg-purpleHover text-center transition duration-300 w-full  font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14 xl:text-[20px] lg:text-[16px]"
                  title="Checkout"
                  onClick={() =>
                    handleAddProduct(
                      title,
                      price as number,
                      quantity,
                      lang as string,
                      id
                    )
                  }
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
