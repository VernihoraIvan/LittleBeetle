const CardInfo = () => {
  return (
    <section className="pt-navPad w-payW">
      <h2 className="font-secondaryBold text-buttonS mb-6">Card information</h2>
      <form className="flex flex-col gap-10" action="">
        <div className="flex flex-col gap-4">
          <label htmlFor="cardName" className="font-secondaryBold text-2xl">
            Cardholder name <span className="text-red-500">*</span>
          </label>
          <input
            className="text-2xl px-4 py-3 border border-primPurpleFaintM h-[60px]"
            type="text"
            id="cardName"
            name="cardName"
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="cardNumber" className="font-secondaryBold text-2xl">
            Card number <span className="text-red-500">*</span>
          </label>
          <input
            className="text-2xl px-4 py-3 border border-primPurpleFaintM h-[60px]"
            type="text"
            id="cardNumber"
            name="cardNumber"
            required
          />
        </div>
        <div className="flex  gap-10">
          <div className="flex flex-col gap-4 w-[275px]">
            <label htmlFor="expDate" className="font-secondaryBold text-2xl">
              Expiry date <span className="text-red-500">*</span>
            </label>
            <input
              className="text-2xl px-4 py-3 border border-primPurpleFaintM h-[60px]"
              type="text"
              id="expDate"
              name="expDate"
              required
              placeholder="MM  /  YY"
            />
          </div>
          <div className="flex flex-col gap-4 w-[275px]">
            <label htmlFor="CVV" className="font-secondaryBold text-2xl">
              CVV <span className="text-red-500">*</span>
            </label>
            <input
              className="text-2xl px-4 py-3 border border-primPurpleFaintM h-[60px]"
              type="text"
              id="CVV"
              name="CVV"
              required
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default CardInfo;
