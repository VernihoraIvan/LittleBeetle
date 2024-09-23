import LinkLogo from "@/assets/icons/external-link.svg?react";
import VoicesLogo from "@/assets/images/voices-logo.png";
const Goal = () => {
  return (
    <section>
      <div className="bg-gradient-to-b from-primPurple to-primPurple h-screen smd:h-auto ">
        <div className="flex justify-center items-center mix-blend-luminosity bg-cover object-fit  bg-about-bg2 bg-no-repeat w-full h-full smd:h-auto smd:py-[140px] smd:px-8">
          <div
            className="flex justify-between gap-20  xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS
          smd:flex-col smd:gap-[60px] items-center"
          >
            <div className="flex w-fit">
              <div className="mb-10 smd:mb-0 flex justify-center align-center flex-col ">
                <h2
                  className="mb-8 smd:mb-0 font-primaryBold text-primWhite text-titleS
                xl:text-buttonS
                smd:text-[22px]"
                >
                  Our goal
                </h2>
                <p
                  className="leading-relaxed text-primWhiteFaint  text-[24px] font-secondaryRegular
                  xl:text-[20px] 
                  lg:text-[16px] 
                  sm:text-[16px] 
                  md:text-[16px] 
                "
                >
                  100% of donations from this project will be redirected to the
                  Voices of Children Charitable Foundation. This organization
                  focuses on providing psychological support to children who
                  have suffered from hostilities and traumatic events in eastern
                  Ukraine. Their mission is that no child should be left alone
                  with the experience of war, and we are committed to supporting
                  this cause together.
                </p>
                <div
                  className="smd:hidden hover:bg-whiteHover transition duration-300 border border-white py-3.5  flex justify-center inline-flex mt-10 w-[400px]
                xl:w-[320px]
                lg:w-[230px] 
                md:w-[230px]"
                >
                  <a
                    href="https://voices.org.ua/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className=" flex gap-2 items-center ">
                      <p
                        className="text-primWhite text-linkS font-primaryRegular
                      lg:text-[18px]"
                      >
                        Learn more
                      </p>
                      <LinkLogo />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center w-[300px]
            xl:w-[280px] xl:h-[280px]
            lg:w-[200px] lg:h-[200px]
            md:w-[200px]"
            >
              <img
                className="h-imgW w-imgW mb-2 
                xl:w-[280px] xl:h-[280px]
                lg:w-[200px] lg:h-[200px]
                md:w-[200px] md:h-[200px]"
                src={VoicesLogo}
                alt="Voices of children logo"
              />
              <p
                className="text-[24px] font-secondarySBold text-primWhite
              xl:text-[20px]
              lg:text-[18px]
              md:text-[18px]"
              >
                Voices of children
              </p>
              <div
                className="hidden smd:block hover:bg-whiteHover transition duration-300 border border-white py-3.5  flex justify-center inline-flex mt-10 w-[400px]
                xl:w-[320px]
                lg:w-[230px] 
                md:w-[230px]
                sm:w-[230px]"
              >
                <a
                  href="https://voices.org.ua/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className=" flex gap-2 items-center justify-center ">
                    <p
                      className="text-primWhite text-linkS font-primaryRegular
                      lg:text-[18px]
                      md:text-[18px]
                      sm:text-[18px]"
                    >
                      Learn more
                    </p>
                    <LinkLogo />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goal;
