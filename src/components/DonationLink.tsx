import ButtonTo from "./ButtonTo";

const DonationLink = () => {
  return (
    <section className="flex justify-center bg-primBeige xxs:px-8">
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
        xl:text-[20px]
        lg:text-[16px]
        smd:text-[16px]"
          >
            Each donation of any size includes access to our Digital Gift
            Package: Digital Illustrated Book, a Lullaby recording, and a
            personalised Digital Donation Certificate. You can now choose to
            complete your donation or add extra items to your cart from our
            Printed Collection. Please select an option below to proceed.
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
