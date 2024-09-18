import SummaryUniversal from "./SummaryUniversal";
import { useState } from "react";
import clsx from "clsx";
import mCardImg from "@/assets/images/mCard.png";
import visaImg from "@/assets/images/visa.png";
import gPayImg from "@/assets/images/gPay.png";
import aPayImg from "@/assets/images/aPay.png";
import { useCart } from "@/zustand/productStore";
import StripeElement from "./PaymentEl/StripeElement";
import GooglePayEl from "./PaymentEl/GooglePayEl";
import ApplePayEl from "./PaymentEl/ApplePayEl";
import { useNavigate } from "react-router-dom";
// import { sentData } from "@/api/connection";

const PaymentSection = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<number>(0);
  const products = useCart((state) => state.items);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  console.log("isPaymentSuccess: ", isPaymentSuccess);
  console.log("products: ", products);

  const handleSubmit = async () => {
    if (isPaymentSuccess) {
      console.log("Payment success");
    } else {
      console.log("Payment failed");
    }
    navigate("/complete");
  };

  // const handleSubmitTest = () => {
  //   sentData(products[0]);
  // };

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
      <div>
        <h2 className="mb-9 font-secondaryBold text-buttonS">Payment method</h2>
        <div className="mb-navPad">
          <ul className="flex flex-col gap-5   ">
            <li
              className={clsx(
                "flex justify-between items-center cursor-pointer text-[24px] font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP ",
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
                  "flex justify-between items-center cursor-pointer text-[24px] font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP ",
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
                  "flex justify-between items-center cursor-pointer text-[24px] font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP",
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
              "w-payW  py-5 font-secondarySBold text-xl",
              isPaymentSuccess && "bg-bgPurple text-primWhite cursor-pointer",
              !isPaymentSuccess && "bg-pinkBar text-primWhite "
            )}
            disabled={!isPaymentSuccess}
          >
            NEXT STEP
          </button>
          {/* <button
            onClick={handleSubmitTest}
            className={clsx(
              "w-payW  py-5 font-secondarySBold text-xl",
              isPaymentSuccess && "bg-bgPurple text-primWhite cursor-pointer",
              !isPaymentSuccess && "bg-pinkBar text-primWhite "
            )}
          >
            test
          </button> */}
        </div>
      </div>
      <SummaryUniversal subTotal={totalFee} shippingFee={0} />
    </section>
  );
};

export default PaymentSection;
