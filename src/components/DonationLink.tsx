import ButtonTo from "./ButtonTo";

const DonationLink = () => {
  return (
    <section className="flex justify-center bg-primBeige">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS flex flex-col items-center border border-primPurple px-24 py-navPad">
        <p
          className="font-secondaryRegular text-linkS mb-9 text-center 
        xl:text-copyS"
        >
          Each donation of any size includes access to our Digital Gift Package:
          Digital Illustrated Book, a Lullaby recording, and a personalised
          Digital Donation Certificate. You can now choose to complete your
          donation or add extra items to your cart from our Printed Collection.
          Please select an option below to proceed.
        </p>
        {/* <button className="uppercase hover:bg-purpleHover text-center transition duration-300 px-imgSW  font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14">
          Donate now
        </button> */}
        <ButtonTo
          to="/checkout-donation/contribution"
          title="Donate now"
          style="uppercase hover:bg-purpleHover text-center transition duration-300 px-imgSW  font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14
          xl:text-linkS"
        />
      </div>
    </section>
  );
};

export default DonationLink;
