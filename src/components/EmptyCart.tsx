import emptyCartIMG from "@/assets/images/cartEmpty.png";
import ButtonTo from "./ButtonTo";

const EmptyCart = () => {
  return (
    <section className="flex-grow flex justify-center pt-[170px] pb-[180px]">
      <div className="flex flex-col items-center">
        <img
          className="w-[130px]"
          src={emptyCartIMG}
          alt="empty cart icon mb-[14px]"
        />
        <h1 className="mb-[42px] font-secondarySBold text-2xl">
          Your cart is empty
        </h1>
        <ButtonTo
          to="/donation"
          title="View Store"
          style="w-[455px] uppercase hover:bg-purpleHover text-center transition duration-300  font-secondarySBold text-primWhite text-2xl bg-primPurple py-[18px] "
        />
      </div>
    </section>
  );
};

export default EmptyCart;
