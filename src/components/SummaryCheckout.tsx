import { SummaryProps } from "@/utilities/interfaces";

const SummaryCheckout = ({ subTotal }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-prodMar">
      <div className="w-sumW border   border-primPurple">
        <div className="px-prodMar py-4 font-secondaryBold text-2xl text-primWhite bg-primPurple">
          Summary
        </div>
        <div>
          <div className="px-prodMar font-secondaryRegular text-inputPink text-linkS">
            <div className="py-8 flex flex-col gap-5">
              <div className="flex justify-between  ">
                <p>Subtotal</p>
                <p>£ {subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping fee</p>
                <p>vary by country</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-linkS text-primPurple py-5 border-t border-bgPurple">
              <p className="font-secondaryBold">Total</p>
              <p className="font-secondaryRegular text-inputPink w-[220px] text-end">
                Calculated after shipment information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummaryCheckout;
