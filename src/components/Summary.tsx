import { SummaryProps } from "@/utilities/interfaces";

const Summary = ({ subTotal, shippingFee }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-prodMar">
      <div className="w-sumW border   border-primPurple">
        <div className="px-prodMar py-4 font-secondaryBold text-2xl text-primWhite bg-primPurple">
          Summary
        </div>
        <div>
          <ul className="px-prodMar py-6">
            <li className="flex justify-between pb-5 text-linkS text-inputPink font-secondaryRegular">
              <p>Subtotal</p>
              <p>£{subTotal}</p>
            </li>
            <li className="flex justify-between pb-navPad text-linkS text-inputPink font-secondaryRegular">
              <p>Shipping fee</p>
              <p>£{shippingFee}</p>
            </li>
            <li className="flex justify-between border-t border-primPurple pt-4 text-2xl text-primPurple font-secondaryBold">
              <p>Total</p>
              <p>£{subTotal + shippingFee}</p>
            </li>
          </ul>
        </div>
      </div>
      <button className="hover:bg-purpleHover transition duration-300 font-secondaryBold bg-primPurple text-primWhite py-4 text-2xl">
        CHECKOUT
      </button>
    </div>
  );
};
export default Summary;
