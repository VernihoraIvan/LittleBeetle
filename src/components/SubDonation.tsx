import { useState } from "react";
import { SubDonationProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import Carousel from "./Carousel";
import { useShipment } from "@/zustand/shipmentStore";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AmountPicker,
  LanguagePicker,
  QuantityStepper,
} from "./Elements/ChoiceControls";

const SubDonation = ({ product, setOpen }: SubDonationProps) => {
  const addProduct = useCart((state) => state.addToCart);
  const cartItems = useCart((state) => state.items);
  const setFee = useShipment((state) => state.setFee);
  const navigate = useNavigate();

  const minPrice = product.prices[0];
  const [price, setPrice] = useState<number>(minPrice);
  const [lang, setLang] = useState<string>("English");
  const [quantity, setQuantity] = useState<number>(1);
  const hasLanguage = product.title !== "Postcards";

  /** Returns true when the item was added to the cart. */
  const handleAddProduct = (silent = false) => {
    if (price >= minPrice && quantity >= 1) {
      const id = nanoid();
      addProduct(
        product.title,
        quantity,
        price,
        lang,
        false,
        id,
        product.weight * quantity
      );
      setFee(id, price, quantity);
      setQuantity(1);
      if (!silent) toast.success(`${product.title} added to your cart`);
      setOpen(false);
      return true;
    }
    toast.error(
      price < minPrice
        ? `Please select a valid amount (minimum £${minPrice})`
        : "Please select a valid quantity"
    );
    return false;
  };

  const handleToCheckout = () => {
    const added = price >= minPrice ? handleAddProduct(true) : false;
    if (added || cartItems.length > 0) {
      setOpen(false);
      navigate("/checkout/contribution");
    } else {
      toast.error(`Please select a valid amount (minimum £${minPrice})`);
    }
  };

  const lineTotal = price >= minPrice ? price * quantity : 0;

  return (
    <div className="grid md:grid-cols-[1.1fr_1fr]">
      <Carousel images={product.imagePath} />
      <div className="flex flex-col gap-6 p-5 pb-8 md:p-8 lg:p-10">
        <div>
          <h2 className="heading-2 pr-10">{product.title}</h2>
          <p className="body mt-3 text-primPurpleFaint">
            {product.description}
          </p>
          <p className="caption mt-2 text-primPurple/60">
            Size: {product.size}
          </p>
        </div>

        <AmountPicker
          amounts={product.prices}
          min={minPrice}
          value={price}
          onChange={setPrice}
        />

        {hasLanguage && <LanguagePicker value={lang} onChange={setLang} />}

        <div className="flex items-center justify-between">
          <span className="field-label mb-0">Quantity</span>
          <QuantityStepper
            value={quantity}
            decrementDisabled={quantity <= 1}
            onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
            onIncrement={() => setQuantity((q) => q + 1)}
          />
        </div>

        <div className="mt-auto border-t border-primPurple/10 pt-5">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="body text-primPurple/70">Your donation</span>
            <span className="font-primaryBold text-2xl tabular-nums">
              £{lineTotal}
            </span>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <button
              type="button"
              onClick={() => handleAddProduct()}
              className="btn-outline"
            >
              Include this gift
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={handleToCheckout}
            >
              Donate now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDonation;
