import SummaryUniversal from "../SummaryUniversal";
import { useState } from "react";
import clsx from "clsx";
import CardInfo from "../PaymentEl/CardInfo";
import mCardImg from "@/assets/images/mCard.png";
import visaImg from "@/assets/images/visa.png";
import gPayImg from "@/assets/images/gPay.png";
import aPayImg from "@/assets/images/aPay.png";
import { useDonation } from "@/zustand/donationStore";

const PaymentSectionWO = () => {
  const [isActive, setIsActive] = useState<number>(0);
  const donations = useDonation((state) => state.items);

  const totalFee = donations.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  console.log("donations: ", donations);

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
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            {isActive === 1 && <CardInfo />}
            {isActive === 2 && (
              <div className="flex items-center justify-center gap-[18px] cursor-pointer text-bgPurple  w-payW  font-secondarySBold text-xl border text-center border-bgPurple">
                <img src={gPayImg} alt="Googlepay icon" />
                <p className="py-5">Continue at Google pay</p>
              </div>
            )}
            {isActive === 3 && (
              <div className="flex items-center justify-center gap-[18px] cursor-pointer text-bgPurple  w-payW  font-secondarySBold text-xl border text-center border-bgPurple">
                <img src={aPayImg} alt="Applepay icon" />
                <p className="py-5">Continue at Apple pay</p>
              </div>
            )}
          </div>
          <button className=" w-payW bg-pinkBar py-5 font-secondarySBold text-xl">
            COMPLETE DONATION
          </button>
        </div>
      </div>
      <SummaryUniversal subTotal={totalFee} shippingFee={0} />
    </section>
  );
};

export default PaymentSectionWO;
