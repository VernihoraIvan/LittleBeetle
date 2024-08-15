import { useShipment } from "@/zustand/shipmentStore";
import SummaryUniversal from "./SummaryUniversal";
import { useState } from "react";
import clsx from "clsx";
import CardInfo from "./CardInfo";

const PaymentSection = () => {
  const [isActive, setIsActive] = useState<number>(0);
  const totalFee = useShipment((state) => state.fee).reduce(
    (acc, curr) => acc + curr,
    0
  );
  return (
    <section className="flex justify-between pt-bookPB">
      <div>
        <h2 className="mb-9 font-secondaryBold text-buttonS">Payment method</h2>
        <div className="mb-navPad">
          <ul className="flex flex-col gap-5   ">
            <li
              className={clsx(
                "cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW pl-CreatorsElP py-5",
                isActive === 1 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(1)}
            >
              Credit / Debit card
            </li>
            <li
              className={clsx(
                "cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW pl-CreatorsElP py-5",
                isActive === 2 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(2)}
            >
              Google pay
            </li>
            <li
              className={clsx(
                "cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW pl-CreatorsElP py-5",
                isActive === 3 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(3)}
            >
              Apple pay
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            {isActive === 1 && <CardInfo />}
            {isActive === 2 && (
              <div className="cursor-pointer text-bgPurple  w-payW py-5 font-secondarySBold text-xl border text-center border-bgPurple">
                Continue at Google pay
              </div>
            )}
            {isActive === 3 && (
              <div className="cursor-pointer text-bgPurple  w-payW py-5 font-secondarySBold text-xl border text-center border-bgPurple">
                Continue at Apple pay
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

export default PaymentSection;
