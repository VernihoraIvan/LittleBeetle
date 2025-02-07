import UnionSVG from "@/assets/icons/arrow-down.svg?react";
import titleImg from "@/assets/images/book_title.png";
import { useMediaQuery } from "react-responsive";

const Description = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <section
      className="relative custom-min-height flex justify-center min:pt-headerPad object-fit  bg-custom-50-150 bg-no-repeat w-screen  h-screen 
    smd:h-auto smd:pb-6 smd:px-8"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover object-[center_40%]
            object-[80%_40%] /* Adjust first value (60%) to move video left/right on mobile */
            "
        >
          <source
            src={
              isMobile
                ? "/animatedIntro-xs.webm"
                : isTablet
                ? "/animatedIntro-md.webm"
                : "/animatedIntro-xl.webm"
            }
            type="video/webm"
          />
        </video>
      </div>

      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 z-[1]"></div>

      <div className="absolute flex gap-2 justify-center align-center flex-col z-[2] xxl:w-contWXL xl:w-contWXL xl:px-[30px] lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS">
        <img
          src={titleImg}
          alt="a book title"
          className="max-w-titleW mb-8 smd2: mt-mainTitleM 
          xl:w-[500px] xl:mb-6
          lg:w-[360px] lg:mb-4
          md:w-[380px] md:mb-4"
        />
        <h2
          className="font-secondaryRegular text-primWhiteFaint text-linkS
        xl:text-[18px]
        lg:text-[16px]
        md:text-[16px]"
        >
          This project is a reflection of teamwork and kindness.
        </h2>
      </div>

      <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%] z-10">
        <UnionSVG />
      </div>
    </section>
  );
};

export default Description;
