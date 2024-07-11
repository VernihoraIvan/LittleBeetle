const Summary = () => {
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
              <p>£15</p>
            </li>
            <li className="flex justify-between pb-navPad text-linkS text-inputPink font-secondaryRegular">
              <p>Shipping fee</p>
              <p>£5</p>
            </li>
            <li className="flex justify-between border-t border-primPurple pt-4 text-2xl text-primPurple font-secondaryBold">
              <p>Total</p>
              <p>£20</p>
            </li>
          </ul>
        </div>
      </div>
      <button className="font-secondaryBold bg-primPurple text-primWhite py-4 text-2xl">
        CHECKOUT
      </button>
    </div>
  );
};
export default Summary;
