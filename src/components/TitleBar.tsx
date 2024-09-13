const TitleBar = () => {
  return (
    <div>
      <div className="pb-5 text-[24px] text-inputPink font-secondaryBold flex justify-between pr-6 border-b border-primPurple">
        <h3>Products</h3>
        <ul className="flex gap-24 xl:gap-16">
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </ul>
      </div>
    </div>
  );
};
export default TitleBar;
