const DonationLink = () => {
  return (
    <section className="flex justify-center bg-primBeige">
      <div className="w-contW flex flex-col items-center">
        <p className="font-secondaryRegular text-linkS px-24 py-navPad mb-9">
          Each donation of any size includes access to our Digital Gift Package:
          Digital Illustrated Book, a Lullaby recording, and a personalised
          Digital Donation Certificate. You can now choose to complete your
          donation or add extra items to your cart from our Printed Collection.
          Please select an option below to proceed.
        </p>
        <button className="uppercase hover:bg-purpleHover text-center transition duration-300 px-imgSW  font-secondarySBold text-primWhite text-addCartS bg-primPurple py-3 px-14">
          Donate now
        </button>
      </div>
    </section>
  );
};

export default DonationLink;
