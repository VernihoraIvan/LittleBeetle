import { SummaryProps } from "@/utilities/interfaces";

const ShippingSummary = ({ subTotal, shippingFee }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-prodMar w-full">
      <div className="border border-primPurple xs:w-full">
        <div
          className="px-prodMar py-4 font-secondaryBold text-[24px] text-primWhite bg-primPurple
          xl:text-[20px]
          lg:text-[16px]
          md:text-[16px]
          sm:text-[16px]"
        >
          Summary
        </div>
        <div>
          <div className="px-prodMar py-9">
            <div
              className="flex justify-between  text-linkS text-primPurple 
          xl:text-[18px]
          lg:text-[16px]
          md:text-[14px]
          sm:text-[14px]"
            >
              <p className="font-secondaryBold">Total</p>
              <p className="font-secondaryRegular text-inputPink">
                £{subTotal + shippingFee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShippingSummary;
