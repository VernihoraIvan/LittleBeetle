import UnionSVG from "@/assets/icons/arrow-down.svg?react";
import { useMediaQuery } from "react-responsive";
import MainTitle from "@/assets/icons/main-title.svg?react";

const Description = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section
      className="relative custom-min-height flex justify-center min:pt-headerPad object-fit  bg-custom-50-150 bg-no-repeat w-screen  h-screen 
    smd:h-auto smd:pb-6 smd:px-8"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-primPurple">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover
            object-[80%_40%] 
            "
        >
          <source
            src={
              isMobile ? "/anIntro-improved.mp4" : "/anIntro-improved-desk.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>

      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0  z-[1]"></div>

      <div
        className="absolute top-[50%] smd:top-[40%] xs:top-[30%] translate-y-[-50%] flex gap-2 
      justify-center align-center flex-col z-[2] xxl:w-contWXL xl:w-contWXL xl:px-[30px] 
      lg:w-contWLG md:w-contWMD xsm:w-[400px] sm:w-contWSM xxs:w-contWXSS"
      >
        <MainTitle
          className="max-w-titleW mb-8 smd2: 
          w-full h-full
          xl:w-[500px] xl:mb-6
          lg:w-[360px] lg:mb-4
          md:w-[380px] md:mb-4"
        />
        <h2
          className="font-secondaryRegular text-primWhiteFaint text-linkS big-responsive-text
        "
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
