import { SummaryProps } from "@/utilities/interfaces";

const SummaryUniversal = ({ subTotal, shippingFee }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-prodMar smd:pt-[40px] ">
      <div
        className="w-[420px] border   border-primPurple
      xl:w-[285px] 
      lg:w-[230px]
      smd:w-full"
      >
        <div
          className="px-prodMar py-4 font-secondaryBold text-[24px] text-primWhite bg-primPurple 
        xl:text-[18px]
        lg:text-[18px]
        md:text-[16px]
        sm:text-[16px]"
        >
          Summary
        </div>
        <div>
          <div
            className="px-[30px] py-[36px] 
          xl:px-[28px] xl:py-[24px]
          lg:px-[24px] lg:py-[20px]
          smd:px-[20px] smd:py-[26px]"
          >
            <div
              className="flex justify-between  text-linkS text-primPurple 
            xl:text-[18px]
            lg:text-[18px]
            md:text-[14px]
            sm:text-[14px]"
            >
              <p className="font-secondaryBold smd:mr-[100px]">Total</p>
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
