import emptyCartIMG from "@/assets/images/cartEmpty.png";
import ButtonTo from "./ButtonTo";

const EmptyCart = () => {
  return (
    <section className="flex-grow flex justify-center pt-[10px] pb-[10px]">
      <div className="flex flex-col items-center">
        <img
          className="w-[130px] sm:w-[80px] md:w-[100px]"
          src={emptyCartIMG}
          alt="empty cart icon mb-[14px]"
        />
        <h1 className="mb-[42px] font-secondarySBold responsive-heading">
          Your cart is empty
        </h1>
        <ButtonTo
          to="/donation"
          title="View Store"
          style="uppercase hover:bg-purpleHover big-responsive-text text-center transition duration-300 xxl:px-imgSW  font-secondarySBold text-primWhite  bg-primPurple py-3 px-14
          "
        />
      </div>
    </section>
  );
};

export default EmptyCart;
