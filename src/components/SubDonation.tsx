import { useEffect, useState, useRef } from "react";
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubDonation = ({ product, setOpen }: SubDonationProps) => {
  const addProduct = useCart((state) => state.addToCart);
  const setFee = useShipment((state) => state.setFee);
  const id = nanoid();
  const navigate = useNavigate();

  const [isOverlayPrice, setIsOverlayPrice] = useState<boolean>(false);
  const [isCustomPrice, setIsCustomPrice] = useState<boolean>(false);

  const priceRef = useRef<number>(0);
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
    if (price >= 3 && quantity >= 1) {
      addProduct(title, quantity, price, lang, false, id, weight * quantity);
      setIsOverlayPrice(false);
      setFee(id, price, quantity);
      setQuantity(1);
      toast.success("Added to cart successfully!");
      setOpen(false);
    } else {
      if (price < 3) {
        toast.error("Please select a valid amount (minimum £3)");
      } else {
        toast.error("Please select a valid quantity");
      }
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
    if (price >= 3 && quantity >= 1) {
      handleAddProduct(title, price, quantity, lang, id, weight);
      navigate("/checkout/contribution");
    } else {
      toast.error("Please select a valid amount (minimum £3)");
    }
  };

  const handleOnCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const value = event.target.value;
    setCustomPrice(value === "" ? 0 : Number(value));
    const newPrice = value === "" ? 0 : Number(value);
    setPrice(newPrice);
    priceRef.current = newPrice;
  };

  const handleSetPrice = (price: number) => {
    setPrice(price);
    setCustomPrice(0);
    priceRef.current = price;
  };

  useEffect(() => {
    if (customPrice) {
      setPrice(customPrice);
      priceRef.current = customPrice;
    }
  }, [customPrice]);

  const priceToShow =
    priceRef.current > 0 ? `${priceRef.current} £` : "Donation Amount";

  return (
    <>
      <section className=" ">
        <section className="flex flex-grow justify-center smd:pt-6 bg-primBeige  ">
          <div
            className="  flex smd:gap-0 gap-10 w-full
        smd:flex-col  "
          >
            <Carousel images={product.imagePath} />
            <div className="    xl:flex xl:flex-col xl:justify-between xxl:flex xxl:flex-col xxl:justify-between   ">
              <h3 className="border-b border-primPurple mt-prodMar leading-relaxed text-secBlack responsive-heading font-secondaryBold">
                {product.title}
              </h3>
              <p className="responsive-text font-secondaryRegular ">
                {product.description}
              </p>
              <p className="small-responsive-text font-secondaryRegular  mt-1">
                Size: {product.size}
              </p>
              <div className="flex flex-col justify-between mt-2 ">
                <div className="relative w-full big-responsive-text">
                  <Select
                    onValueChange={(value) => {
                      if (value === "custom") {
                        setIsCustomPrice(true);
                      } else {
                        setIsCustomPrice(false);
                        handleSetPrice(Number(value));
                      }
                    }}
                  >
                    <SelectTrigger className="w-full bg-white xl:h-[45px] xxl:h-[63px] ">
                      <SelectValue placeholder={priceToShow} />
                    </SelectTrigger>
                    <SelectContent className="w-full bg-white cursor-pointer">
                      {product.prices.map((price) => (
                        <SelectItem
                          className="cursor-pointer xl:h-[45px] xxl:h-[63px] hover:bg-dropHover transition duration-300"
                          value={price.toString()}
                        >
                          {price} £
                        </SelectItem>
                      ))}

                      <SelectItem
                        className="cursor-pointer xl:h-[45px] xxl:h-[63px] hover:bg-dropHover transition duration-300"
                        value="custom"
                      >
                        Enter custom amount
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Custom price input appears below the select when custom option is chosen */}
                  {isCustomPrice && (
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        <input
                          id="customPrice"
                          autoComplete="off"
                          className="w-full px-3 h-[45px] border border-primPurpleFaintM [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          type="number"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          name="priceInput"
                          placeholder="Enter amount (£)"
                          value={customPrice || ""}
                          onChange={(e) => handleOnCustomChange(e)}
                        />
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Alert className="w-4 h-4 text-inputPink" />
                        <p className="text-sm text-inputPink min:block hidden">
                          Minimum Donation: £3
                        </p>
                        <p className="text-sm text-inputPink block min:hidden">
                          Min. Don.: £3
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative w-full mt-[10px] big-responsive-text">
                  <Select onValueChange={(value) => setLang(value)}>
                    <SelectTrigger className="w-full bg-white xl:h-[45px] xxl:h-[63px] ">
                      <SelectValue placeholder="English" />
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
                        product.title,
                        price as number,
                        quantity,
                        lang as string,
                        id,
                        product.weight
                      )
                    }
                    className="hover:bg-whiteHover h-fit-content transition duration-300 w-full font-secondarySBold text-primPurple border border-primPurple responsive-heading bg-primWhite py-3 smd:py-1  lg:px-0  xl:py-2"
                  >
                    Add to Cart
                  </button>

                  <button
                    className="hover:bg-purpleHover h-fit-content text-center transition duration-300 w-full  font-secondarySBold text-primWhite  bg-primPurple py-3 smd:py-1  lg:px-0 xl:py-2 responsive-heading"
                    onClick={() =>
                      handleToCheckout(
                        product.title,
                        price,
                        quantity,
                        lang,
                        id,
                        product.weight
                      )
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
