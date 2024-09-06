const DonationGreet = () => {
  return (
    <section className="flex justify-center pt-headerPad object-fit bg-cover bg-custom-50-150 bg-no-repeat w-screen  h-secH bg-donation-bg">
      <div className="flex gap-2 justify-center align-center flex-col xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS">
        <h2
          className="font-primaryBold text-primWhite  text-titleS
        xl:text-buttonS"
        >
          Why Donate?
        </h2>
        <p
          className="leading-relaxed text-primWhiteFaint h-purchImgH text-2xl font-secondaryRegular
        xl:text-[20px]"
        >
          This project was born from a simple philosophy: whether you donate
          your time, attention, or money, we value these contributions
          immensely. We designed this initiative around the idea of resource
          exchange with everyone involved, ensuring a tangible balance between
          all forms of support. Your donation not only helps provide
          psychological support to children affected by war but also honours the
          collective effort of our global volunteer team. We also hope that the
          products we crafted bring joy to your home and magic to a child who
          will listen to the lullaby and explore the world we embodied in this
          beautiful illustrated book.
        </p>
      </div>
    </section>
  );
};

export default DonationGreet;
