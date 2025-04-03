import UnionSVG from "@/assets/icons/arrow-down.svg?react";

const DonationGreet = () => {
  return (
    <section className="bg-primPurple">
      <section
        className=" relative custom-min-height flex justify-center min:pt-headerPad object-fit bg-cover bg-custom-50-150 bg-no-repeat w-screen h-screen bg-donation-bg before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/20 before:to-black/30
smd:h-auto smd:pb-6 smd:px-8"
      >
        <div className="flex gap-2 justify-center align-center flex-col xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS">
          <h2
            className="font-primaryBold text-primWhite  text-titleS z-[1]
   xl:text-[28px]
   lg:text-[22px]
   smd:text-[22px]"
          >
            Your Support
          </h2>
          <p
            className="leading-relaxed text-primWhiteFaint h-purchImgH text-[24px] font-secondaryRegular z-[1]
   xl:text-[20px]
   lg:text-[16px]
   smd:text-[16px] smd:h-auto"
          >
            This project was born from a simple philosophy: whether you donate
            your time, attention, or money, we value these contributions
            immensely. We designed this initiative around the idea of resource
            exchange with everyone involved, ensuring a tangible balance between
            all forms of support. Your donation not only helps provide
            psychological support to children affected by war but also honours
            the collective effort of our global volunteer team. We also hope
            that the products we crafted bring joy to your home and magic to a
            child who will listen to the lullaby and explore the world we
            embodied in this beautiful illustrated book.
          </p>
        </div>
        <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%]">
          <UnionSVG />
        </div>
      </section>
    </section>
  );
};

export default DonationGreet;
