import UnionSVG from "@/assets/icons/arrow-down.svg?react";
import titleImg from "@/assets/images/book_title.png";

const Description = () => {
  return (
    <section className="relative flex justify-center pt-headerPad object-fit bg-cover bg-home-bg bg-custom-50-150 bg-no-repeat w-screen  h-screen">
      <div className="flex gap-2 justify-center align-center flex-col xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS">
        <img
          src={titleImg}
          alt="a book title"
          className="w-titleW mb-8 mt-mainTitleM"
        />
        <h2 className="font-secondaryRegular text-primWhiteFaint text-linkS">
          This project is a reflection of teamwork and kindness.
        </h2>
        {/* <h2 className="font-primaryBold text-primWhite  text-titleS">
          About the project
        </h2>
        <p className="leading-relaxed text-primWhiteFaint w-[1110px] text-[24px] font-secondaryRegular">
          Created to support children affected by the war in Ukraine, we aim to
          help provide psychological rehabilitation and raise donations for the
          organization offering this vital care.
        </p> */}
      </div>
      <div className="absolute bottom-[10%] left-[50%]">
        <UnionSVG />
      </div>
    </section>
  );
};

export default Description;
