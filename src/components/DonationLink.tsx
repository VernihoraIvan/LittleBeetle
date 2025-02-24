import ButtonTo from "./ButtonTo";

const DonationLink = () => {
  return (
    <section className="flex justify-center bg-primBeige xxs:px-8 xs:mt-10">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:max-w-contWXSS">
        <div
          className=" flex flex-col items-center border border-primPurple 
      xxl:px-[100px] xxl:py-[75px]
      xl:px-[90px] xl:py-[65px]
      lg:px-[55px] lg:py-[60px]
      md:px-[30px] md:py-[60px]
      sm:px-[20px] sm:py-[60px]
      xs:px-[20px] xs:py-[65px]"
        >
          <p
            className="font-secondaryRegular text-linkS mb-9 text-center 
        responsive-text"
          >
            Every donation, regardless of size, now includes access to our
            Digital Gift Package: a digital illustrated book, a lullaby
            recording, and a personalized digital donation certificate. You can
            now choose to complete your donation.
          </p>
          <ButtonTo
            to="/checkout-donation/contribution"
            title="Donate now"
            style="uppercase hover:bg-purpleHover text-center transition duration-300 xxl:px-imgSW  font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14
          lg:text-[22px]
      md:text-[18px]
      smd:text-[18px]"
          />
        </div>
      </div>
    </section>
  );
};

export default DonationLink;
