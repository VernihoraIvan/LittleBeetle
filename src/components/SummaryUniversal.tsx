import { SummaryProps } from "@/utilities/interfaces";

const SummaryUniversal = ({ subTotal, shippingFee }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-prodMar smd:pt-[40px]">
      <div
        className="w-[420px] border   border-primPurple
      xl:w-[285px] 
      lg:w-[230px]
      smd:w-full"
      >
        <div
          className="px-prodMar py-4 font-secondaryBold text-[24px] text-primWhite bg-primPurple 
        xl:text-[20px]
        lg:text-[20px]"
        >
          Summary
        </div>
        <div>
          <div className="px-prodMar py-9">
            <div
              className="flex justify-between  text-linkS text-primPurple 
            xl:text-[18px]
            lg:text-[18px]"
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
export default SummaryUniversal;
