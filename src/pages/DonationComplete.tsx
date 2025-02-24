import Title from "../components/Title";
import { useCart } from "../zustand/productStore";
import { useEffect } from "react";

const DonationComplete = () => {
  const clearCart = useCart((state) => state.clearCart);
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <>
      <Title title="" />
      <div className=" flex justify-center items-center  h-[calc(100vh-40px)] px-10">
        <div className="flex flex-col gap-[18px] items-center max-w-[600px]">
          <h2 className="font-secondaryBold text-buttonS text-center responsive-heading">
            Thank you! Your donation is complete.
          </h2>
          <p className="font-secondaryRegular text-linkS text-center big-responsive-text">
            We sent an email with the access to the digital products included to
            the address you provided. We hope the book and lullaby we've created
            bring you some joy and a touch of magic.
          </p>
        </div>
      </div>
    </>
  );
};

export default DonationComplete;
