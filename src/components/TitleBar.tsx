const TitleBar = () => {
  return (
    <div className="xxl:w-contW ">
      <div className="pb-5 text-2xl text-inputPink border-b border-primPurple font-secondaryBold flex justify-between w-full">
        <h3>Products</h3>
        <ul className="flex gap-24">
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </ul>
      </div>
    </div>
  );
};
export default TitleBar;
