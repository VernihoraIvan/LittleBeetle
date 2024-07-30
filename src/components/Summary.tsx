import { SummaryProps } from "@/utilities/interfaces";
import ButtonTo from "./ButtonTo";

const Summary = ({ subTotal, shippingFee }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-prodMar">
      <div className="w-sumW border   border-primPurple">
        <div className="px-prodMar py-4 font-secondaryBold text-2xl text-primWhite bg-primPurple">
          Summary
        </div>
        <div>
          <div className="px-prodMar py-9">
            <div className="flex justify-between  text-linkS text-primPurple ">
              <p className="font-secondaryBold">Total</p>
              <p className="font-secondaryRegular text-inputPink">
                £{subTotal + shippingFee}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonTo
        to="/checkout/contribution"
        style="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondaryBold bg-primPurple text-primWhite py-4 text-2xl"
        title="checkout"
      />
    </div>
  );
};
export default Summary;
