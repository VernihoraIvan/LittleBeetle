import SummaryUniversal from "../SummaryUniversal";
import { useState } from "react";
import clsx from "clsx";
// import CardInfo from "../PaymentEl/CardInfo";
import mCardImg from "@/assets/images/mCard.png";
import visaImg from "@/assets/images/visa.png";
import gPayImg from "@/assets/images/gPay.png";
import aPayImg from "@/assets/images/aPay.png";
import { useDonation } from "@/zustand/donationStore";
import { useNavigate } from "react-router-dom";
import StripeElement from "../PaymentEl/StripeElement";
import GooglePayEl from "../PaymentEl/GooglePayEl";
import ApplePayEl from "../PaymentEl/ApplePayEl";

const PaymentSectionWO = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<number>(0);
  // const products = useCart((state) => state.items);
  const donations = useDonation((state) => state.items);

  const totalFee = donations.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  console.log("donations: ", donations);

  const handleSubmit = async () => {
    if (isPaymentSuccess) {
      console.log("Payment success");
    } else {
      console.log("Payment failed");
    }
    navigate("/complete");
  };

  return (
    // <section className="flex justify-between pt-bookPB">
    //   <div>
    //     <h2 className="mb-9 font-secondaryBold text-buttonS">Payment method</h2>
    //     <div className="mb-navPad">
    //       <ul className="flex flex-col gap-5   ">
    //         <li
    //           className={clsx(
    //             "flex justify-between items-center cursor-pointer text-[24px] font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP ",
    //             isActive === 1 && "bg-payButtonActive"
    //           )}
    //           onClick={() => setIsActive(1)}
    //         >
    //           <p className="py-5">Credit / Debit card</p>
    //           <div className="flex items-center gap-3">
    //             <img
    //               className="w-20 h-[56px]"
    //               src={mCardImg}
    //               alt="Master card icon"
    //             />
    //             <img src={visaImg} alt="Visa icon" />
    //           </div>
    //         </li>
    //         <li
    //           className={clsx(
    //             "flex justify-between items-center cursor-pointer text-[24px] font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP ",
    //             isActive === 2 && "bg-payButtonActive"
    //           )}
    //           onClick={() => setIsActive(2)}
    //         >
    //           <p className="py-5">Google pay</p>
    //           <img src={gPayImg} alt="Googlepay icon" />
    //         </li>
    //         <li
    //           className={clsx(
    //             "flex justify-between items-center cursor-pointer text-[24px] font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP",
    //             isActive === 3 && "bg-payButtonActive"
    //           )}
    //           onClick={() => setIsActive(3)}
    //         >
    //           <p className="py-5">Apple pay</p>
    //           <img src={aPayImg} alt="Applepay icon" />
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="flex flex-col gap-5">
    //       <div className="">
    //         {isActive === 1 && <CardInfo />}
    //         {isActive === 2 && (
    //           <div className="flex items-center justify-center gap-[18px] cursor-pointer text-bgPurple  w-payW  font-secondarySBold text-xl border text-center border-bgPurple">
    //             <img src={gPayImg} alt="Googlepay icon" />
    //             <p className="py-5">Continue at Google pay</p>
    //           </div>
    //         )}
    //         {isActive === 3 && (
    //           <div className="flex items-center justify-center gap-[18px] cursor-pointer text-bgPurple  w-payW  font-secondarySBold text-xl border text-center border-bgPurple">
    //             <img src={aPayImg} alt="Applepay icon" />
    //             <p className="py-5">Continue at Apple pay</p>
    //           </div>
    //         )}
    //       </div>
    //       <button className=" w-payW bg-pinkBar py-5 font-secondarySBold text-xl">
    //         NEXT STEP
    //       </button>
    //     </div>
    //   </div>
    //   <SummaryUniversal subTotal={totalFee} shippingFee={0} />
    // </section>
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

export default PaymentSectionWO;
