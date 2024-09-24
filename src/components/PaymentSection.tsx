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

  // function detectUserOS(): "Android" | "Apple" | "Desktop" | "Unknown" {
  //   const userAgent = navigator.userAgent;
  //   if (/android/i.test(userAgent)) {
  //     return "Android";
  //   }
  //   if (/iPad|iPhone|iPod|Macintosh|Mac OS X/.test(userAgent)) {
  //     return "Apple";
  //   }
  //   if (/Windows|Linux/.test(userAgent)) {
  //     return "Desktop";
  //   }
  //   return "Unknown";
  // }
  // const currentOS = detectUserOS();

  // console.log(detectUserOS());

  return (
    <section className="flex justify-between pt-bookPB sm:flex-col sm:flex-col-reverse sm:pt-0 ">
      <div
        className="w-[580px]
      xl:w-[510px] 
      lg:w-[380px]
      md:w-[380px]
      sm:w-full sm:pt-8"
      >
        <h2
          className="mb-9 font-secondaryBold text-buttonS
        xl:text-[24px]
              lg:text-[22px]
              md:text-[22px]
              sm:text-[22px]"
        >
          Payment method
        </h2>
        <div className="mb-navPad">
          <ul className="flex flex-col gap-5   ">
            <li
              className={clsx(
                "flex justify-between items-center cursor-pointer  font-secondaryBold text-bgPurple border border-bgPurple  px-CreatorsElP h-[80px] xl:h-[60px] xl:px-6 lg:h-[44px] lg:px-4 smd:h-[44px] smd:px-4 ",
                isActive === 1 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(1)}
            >
              <p className="py-5 text-[24px] xl:text-[18px] lg:text-[16px] smd:text-[16px]">
                Credit / Debit card
              </p>
              <div className="flex items-center gap-3 h-full xl:gap-2 lg:gap-1 smd:gap-1">
                <img
                  className=" h-[56px] xl:h-[42px] lg:h-[31px] smd:h-[31px]"
                  src={mCardImg}
                  alt="Master card icon"
                />
                <img src={visaImg} className="h-full" alt="Visa icon" />
              </div>
            </li>
            {/* {currentOS === "Android" && ( */}
            <li
              className={clsx(
                "flex justify-between items-center cursor-pointer font-secondaryBold text-bgPurple border border-bgPurple px-CreatorsElP h-[80px] xl:h-[60px] xl:px-6 lg:h-[44px] lg:px-4 smd:h-[44px] smd:px-4",
                isActive === 2 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(2)}
            >
              <p className="py-5 text-[24px] xl:text-[18px] lg:text-[16px] smd:text-[16px]">
                Google pay
              </p>
              <img src={gPayImg} className="h-full" alt="Googlepay icon" />
            </li>
            {/* )} */}
            {/* {currentOS === "Apple" && ( */}
            <li
              className={clsx(
                "flex justify-between items-center cursor-pointer  font-secondaryBold text-bgPurple border border-bgPurple  px-CreatorsElP h-[80px] xl:h-[60px] xl:px-6 lg:h-[44px] lg:px-4 smd:h-[44px] smd:px-4",
                isActive === 3 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(3)}
            >
              <p className="py-5 text-[24px] xl:text-[18px] lg:text-[16px] smd:text-[16px]">
                Apple pay
              </p>
              <img src={aPayImg} className="h-full" alt="Applepay icon" />
            </li>
            {/* )} */}
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
              " uppercase py-4  font-secondarySBold text-xl xl:text-[20px] lg:text-[18px] smd:text-[18px]",
              isPaymentSuccess && "bg-bgPurple text-primWhite cursor-pointer",
              !isPaymentSuccess && "bg-pinkBar text-primWhite "
            )}
            disabled={!isPaymentSuccess}
          >
            complete donation
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
