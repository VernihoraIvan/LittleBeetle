import ButtonTo from "./ButtonTo";

const ModalWindow = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-centr">
      <div className="w-modalW bg-textYellow h-fit-content p-modalP">
        <h3 className="font-secondaryBold text-buttonS mb-4">Donation</h3>
        <p className="font-secondaryRegular texte-linkS">
          Each donation of any size includes access to our Digital Gift Package:
          Digital Illustrated Book, a Lullaby recording, and a personalised
          Digital Donation Certificate. You can now choose to complete your
          donation or add extra items to your cart from our Printed Collection.
          Please select an option below to proceed.
        </p>
        <div className="flex gap-5 mt-bookPT">
          <button className="hover:bg-whiteHover border border-primPurple w-full py-4 text-addCartS font-secondarySBold text-primPurple">
            Select Optional Gifts
          </button>
          <ButtonTo
            to={"/checkout"}
            title="Complete Donation"
            style="uppercase w-full py-4 text-addCartS font-secondarySBold hover:bg-purpleHover text-center transition duration-300   font-secondarySBold text-primWhite text-addCartS bg-primPurple"
          />
        </div>
      </div>
    </section>
  );
};

export default ModalWindow;
