import SummaryUniversal from "./SummaryUniversal";
import { useState } from "react";
import clsx from "clsx";
// import CardInfo from "./CardInfo";
import mCardImg from "@/assets/images/mCard.png";
import visaImg from "@/assets/images/visa.png";
import gPayImg from "@/assets/images/gPay.png";
import aPayImg from "@/assets/images/aPay.png";
import { useCart } from "@/zustand/productStore";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { proceedToPayment } from "@/api/connection";
import StripeElement from "./StripeElement";
import GooglePayEl from "./GooglePayEl";
import ApplePayEl from "./ApplePayEl";

// import { loadStripe } from "@stripe/stripe-js";
// import {
// CardElement,
// Elements,
// useElements,
// useStripe,
// } from "@stripe/react-stripe-js";
// import { proceedToPayment } from "@/api/connection";

// const stripePromise = await loadStripe(
//   "pk_test_51PrdjZRq3XOp8unvxUPIEbTEL0xEDoyX71gTb6k1rEfs9uTJMKXfGsGuc60f85tKqQQS0EdQ35t3bGrYasNtOQKu00JXDLVkAb"
// );

const PaymentSection = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean>(false);

  const [isActive, setIsActive] = useState<number>(0);
  const products = useCart((state) => state.items);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleSubmit = async () => {
    // const res = await proceedToPayment(totalFee, "usd");
    // console.log("inside handleSubmit");
    // console.log(res);
    if (isPaymentSuccess) {
      console.log("Payment success");
    } else {
      console.log("Payment failed");
    }
  };

  function detectUserOS(): "Android" | "Apple" | "Desktop" | "Unknown" {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      return "Android";
    }
    if (/iPad|iPhone|iPod|Macintosh|Mac OS X/.test(userAgent)) {
      return "Apple";
    }
    if (/Windows|Linux/.test(userAgent)) {
      return "Desktop";
    }
    return "Unknown";
  }
  const currentOS = detectUserOS();

  console.log(detectUserOS());

  return (
    <section className="flex justify-between pt-bookPB">
      {/* <CardElement /> */}
      <div>
        <h2 className="mb-9 font-secondaryBold text-buttonS">Payment method</h2>
        <div className="mb-navPad">
          <ul className="flex flex-col gap-5   ">
            <li
              className={clsx(
                "flex justify-between items-center cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP ",
                isActive === 1 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(1)}
            >
              <p className="py-5">Credit / Debit card</p>
              <div className="flex items-center gap-3">
                <img
                  className="w-20 h-[56px]"
                  src={mCardImg}
                  alt="Master card icon"
                />
                <img src={visaImg} alt="Visa icon" />
              </div>
            </li>
            {currentOS === "Android" && (
              <li
                className={clsx(
                  "flex justify-between items-center cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP ",
                  isActive === 2 && "bg-payButtonActive"
                )}
                onClick={() => setIsActive(2)}
              >
                <p className="py-5">Google pay</p>
                <img src={gPayImg} alt="Googlepay icon" />
              </li>
            )}
            {currentOS === "Apple" && (
              <li
                className={clsx(
                  "flex justify-between items-center cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP",
                  isActive === 3 && "bg-payButtonActive"
                )}
                onClick={() => setIsActive(3)}
              >
                <p className="py-5">Apple pay</p>
                <img src={aPayImg} alt="Applepay icon" />
              </li>
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            {isActive === 1 && (
              <StripeElement setIsPaymentSuccess={setIsPaymentSuccess} />
            )}
            {isActive === 2 && <GooglePayEl />}
            {isActive === 3 && <ApplePayEl />}
          </div>

          <button
            onClick={handleSubmit}
            className={clsx(
              "w-payW bg-pinkBar py-5 font-secondarySBold text-xl",
              isPaymentSuccess && "bg-bgPurple text-primWhite cursor-pointer"
            )}
            disabled={!isPaymentSuccess}
          >
            COMPLETE DONATION
          </button>
        </div>
      </div>
      <SummaryUniversal subTotal={totalFee} shippingFee={0} />
    </section>
  );
};

export default PaymentSection;
