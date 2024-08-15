import { useShipment } from "@/zustand/shipmentStore";
import SummaryUniversal from "./SummaryUniversal";

const PatmentSection = () => {
  const totalFee = useShipment((state) => state.fee).reduce(
    (acc, curr) => acc + curr,
    0
  );
  return (
    <section className="flex justify-between pt-bookPB">
      <div>
        <h2 className="font-secondaryBold text-buttonS">Payment method</h2>
        <div>
          <ul className="flex flex-col gap-5 mt-9 mb-navPad ">
            <li className="cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW pl-CreatorsElP py-5">
              Credit / Debit card
            </li>
            <li className="cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW pl-CreatorsElP py-5">
              Google pay
            </li>
            <li className="cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW pl-CreatorsElP py-5">
              Apple pay
            </li>
          </ul>
        </div>
        <button className="w-payW bg-pinkBar py-5 font-secondarySBold text-xl">
          COMPLETE DONATION
        </button>
      </div>
      <SummaryUniversal subTotal={totalFee} shippingFee={0} />
    </section>
  );
};

export default PatmentSection;
