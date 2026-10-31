import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { ArrowRight, Gift } from "lucide-react";
import { extraProducts } from "@/utilities/data";
import CheckoutContributionEl from "../Elements/CheckoutContributionEl";
import CartIncludedWidget from "../CartIncludedWidget";
import SummaryUniversal from "../SummaryUniversal";
import DonationOption, { MIN_DONATION } from "../DonationOption";
import { CheckoutGrid, StepHeading } from "../CheckoutShared";
import { useGoToGifts } from "@/lib/useGoToGifts";
import { useStage } from "@/zustand/stageStore";
import { useDonation } from "@/zustand/donationStore";

const CheckoutContributionWO = () => {
  const [price, setPrice] = useState<number>(0);
  const [lang, setLang] = useState<string>("English");

  const addDonation = useDonation((state) => state.addDonation);
  const donations = useDonation((state) => state.items);
  const setStage = useStage((state) => state.setStage);
  const navigate = useNavigate();
  const goToGifts = useGoToGifts();

  const totalFee =
    donations.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    ) + price;

  const handleNext = () => {
    if (price >= MIN_DONATION) {
      addDonation("Donation", 1, price, lang, false, nanoid(), 0);
      setPrice(0);
    } else if (totalFee < MIN_DONATION) {
      toast.error(`Please choose an amount of at least £${MIN_DONATION}`);
      return;
    }
    setStage(2);
    navigate("/checkout-donation/details");
  };

  return (
    <CheckoutGrid
      aside={
        <>
          <SummaryUniversal subTotal={totalFee} shippingFee={0} isDonation>
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary btn-lg w-full"
            >
              Continue
              <ArrowRight className="h-5 w-5" />
            </button>
          </SummaryUniversal>
          <CartIncludedWidget />
        </>
      }
    >
      <StepHeading
        title="Your donation"
        description="Please select your donation amount and the language for the products included in your donation package."
      />
      {donations.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {donations.map((product) => (
            <CheckoutContributionEl
              key={product.id}
              id={product.id}
              name={product.product_name}
              quantity={product.quantity}
              total={product.price * product.quantity}
              language={product.product_language}
              imgPath={
                extraProducts.find((p) => p.title === product.product_name)
                  ?.imagePath
              }
            />
          ))}
        </ul>
      ) : (
        <DonationOption
          price={price}
          setPrice={setPrice}
          lang={lang}
          setLang={setLang}
        />
      )}
      <button
        type="button"
        onClick={goToGifts}
        className="mt-6 flex w-full items-center gap-4 rounded-2xl border border-primPurple/15 p-4 text-left transition-colors duration-200 hover:border-primPurple/40 hover:bg-primWhite"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lilac/30">
          <Gift className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="flex-1">
          <span className="block font-secondarySBold">
            View optional printed gifts
          </span>
          <span className="caption text-primPurple/60">
            A printed book, poster or postcards
          </span>
        </span>
        <ArrowRight className="h-5 w-5 text-primPurple/50" aria-hidden="true" />
      </button>
    </CheckoutGrid>
  );
};

export default CheckoutContributionWO;
