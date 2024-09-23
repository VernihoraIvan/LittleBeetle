const TitleBar = () => {
  return (
    <div>
      <h3
        className="font-primaryBold mb-6 text-primPurple hidden 
      sm:block sm:text-[18px] "
      >
        Your Donation Cart
      </h3>
      <div
        className="pb-5 text-[24px] text-inputPink font-secondaryBold flex justify-between pr-6 border-b border-primPurple
      xl:text-[20px]
      lg:text-[16px]
      smd:text-[16px]
      sm:hidden"
      >
        <h3>Contribution</h3>
        <ul className="flex gap-[120px] xl:gap-16 lg:gap-[75px] md:gap-[80px]">
          <li>Price</li>
          <li>Qty</li>
          <li>Total</li>
        </ul>
      </div>
    </div>
  );
};
export default TitleBar;
