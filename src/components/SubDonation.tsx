import { useEffect, useState } from "react";
import { SubDonationProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import clsx from "clsx";
import QuantityAdjuster from "./QuantityAdjusterWState";
import Carousel from "./Carousel";
import { useShipment } from "@/zustand/shipmentStore";
import { nanoid } from "nanoid";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "./ui/select";
import { useNavigate } from "react-router-dom";
import Alert from "@/assets/icons/alert-circle.svg?react";

const SubDonation = ({
  title,
  description,
  imagePath,
  weight,
}: SubDonationProps) => {
  const addProduct = useCart((state) => state.addToCart);
  const setFee = useShipment((state) => state.setFee);
  const id = nanoid();
  const navigate = useNavigate();

  const [isOverlayPrice, setIsOverlayPrice] = useState<boolean>(false);

  const [price, setPrice] = useState<number>(0);
  const [customPrice, setCustomPrice] = useState<number | null>(null);
  const [lang, setLang] = useState<string>("English");
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddProduct = (
    title: string,
    price: number,
    quantity: number,
    lang: string,
    id: string,
    weight: number
  ) => {
    if (price > 2 && quantity >= 1) {
      addProduct(title, quantity, price, lang, false, id, weight * quantity);
      setIsOverlayPrice(false);
      setFee(id, price, quantity);
      setQuantity(1);
    }
  };

  const handleToCheckout = (
    title: string,
    price: number,
    quantity: number,
    lang: string,
    id: string,
    weight: number
  ) => {
    if (price > 2 && quantity >= 1) {
      handleAddProduct(title, price, quantity, lang, id, weight);
      navigate("/checkout/contribution");
    }
  };

  useEffect(() => {}, [price, customPrice]);

  return (
    <>
      <section className=" ">
        <section className="flex flex-grow justify-center smd:pt-6 bg-primBeige  ">
          <div
            className="  flex smd:gap-0 gap-10 w-full
        smd:flex-col  "
          >
            <Carousel images={imagePath} />
            <div className="    xl:flex xl:flex-col xl:justify-between xxl:flex xxl:flex-col xxl:justify-between   ">
              <h3 className="border-b border-primPurple mt-prodMar leading-relaxed text-secBlack responsive-heading font-secondaryBold">
                {title}
              </h3>
              <p className="responsive-text font-secondaryRegular ">
                {description}
              </p>
              <p className="small-responsive-text font-secondaryRegular  mt-1">
                Size: 21.0 x 29.7 cm
              </p>
              <div className="flex flex-col justify-between mt-2 ">
                <div className="relative w-full big-responsive-text">
                  <Select onValueChange={(value) => setPrice(Number(value))}>
                    <SelectTrigger className="w-full bg-white xl:h-[45px] xxl:h-[63px]">
                      <SelectValue placeholder="Donation Amount">
                        {price}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="w-full bg-white cursor-pointer">
                      <SelectItem
                        className="cursor-pointer xl:h-[45px] xxl:h-[63px] hover:bg-dropHover transition duration-300"
                        value="3"
                      >
                        3
                      </SelectItem>
                      <SelectItem
                        className="cursor-pointer xl:h-[45px] xxl:h-[63px] hover:bg-dropHover transition duration-300"
                        value="5"
                      >
                        5
                      </SelectItem>
                      <SelectItem
                        className="cursor-pointer xl:h-[45px] xxl:h-[63px] hover:bg-dropHover transition duration-300"
                        value="10"
                      >
                        10
                      </SelectItem>
                      <div className="flex  justify-between gap-2 px-2 hover:bg-dropHover transition duration-300">
                        <label htmlFor="customPrice" className="cursor-pointer">
                          Enter your own amount
                        </label>
                        <div className=" py-1">
                          <input
                            id="customPrice"
                            autoComplete="off"
                            className="w-40 sm:w-20 sm:py-1 px-3 h-10 border border-primPurpleFaintM [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            name="priceInput"
                            placeholder="£"
                            value={customPrice || ""}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => setCustomPrice(Number(event.target.value))}
                            onBlur={(
                              event: React.FocusEvent<HTMLInputElement>
                            ) => setPrice(Number(event.target.value))}
                          />
                          <div className="flex items-center gap-1">
                            <Alert className="w-4 h-4 text-inputPink" />
                            <p className="text-sm text-inputPink min:block hidden">
                              Minimum Donation: £3
                            </p>
                            <p className="text-sm text-inputPink block min:hidden">
                              Min. Don.: £3
                            </p>
                          </div>
                        </div>
                      </div>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative w-full mt-[10px] big-responsive-text">
                  <Select onValueChange={(value) => setLang(value)}>
                    <SelectTrigger className="w-full bg-white xl:h-[45px] xxl:h-[63px] ">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent className="w-full bg-white ">
                      <SelectItem
                        className="cursor-pointer xl:h-[45px] xxl:h-[63px] hover:bg-dropHover transition duration-300"
                        value="English"
                      >
                        English
                      </SelectItem>
                      <SelectItem
                        className="cursor-pointer xl:h-[45px] xxl:h-[63px] hover:bg-dropHover transition duration-300"
                        value="Ukrainian"
                      >
                        Ukrainian
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div
                  className="flex gap-6 mt-[10px]  select-none
              xl:mt-[18px] xxl:mt-[18px]"
                >
                  <p className="font-secondaryRegular responsive-heading text-inputPink ">
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
                    "flex gap-5 mt-[10px] xl:mt-4 xxl:mt-4",
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
                        id,
                        weight
                      )
                    }
                    className="hover:bg-whiteHover h-fit-content transition duration-300 w-full font-secondarySBold text-primPurple border border-primPurple responsive-heading bg-primWhite py-3 smd:py-1  lg:px-0  xl:py-2"
                  >
                    Add to Cart
                  </button>

                  <button
                    className="hover:bg-purpleHover h-fit-content text-center transition duration-300 w-full  font-secondarySBold text-primWhite  bg-primPurple py-3 smd:py-1  lg:px-0 xl:py-2 responsive-heading"
                    onClick={() =>
                      handleToCheckout(title, price, quantity, lang, id, weight)
                    }
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SubDonation;
