const Description = () => {
  return (
    <section className="flex justify-center pt-headerPad object-fit bg-cover bg-about-bg bg-custom-50-150 bg-no-repeat w-screen  h-secH">
      <div className="flex gap-2 justify-center align-center flex-col xxl:w-contW">
        <h2 className="font-primaryBold text-primWhite  text-titleS">
          About the project
        </h2>
        <p className="leading-relaxed text-primWhiteFaint w-[1110px] text-2xl font-secondaryRegular">
          Created to support children affected by the war in Ukraine, we aim to
          help provide psychological rehabilitation and raise donations for the
          organization offering this vital care.
        </p>
      </div>
    </section>
  );
};

export default Description;
