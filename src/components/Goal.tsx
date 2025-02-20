import LinkLogo from "@/assets/icons/external-link.svg?react";
import VoicesLogo from "@/assets/images/voices-logo.png";
const Goal = () => {
  return (
    <section className="w-full">
      <div className=" bg-gradient-to-b from-primPurple to-primPurple h-screen smd:h-auto ">
        <div className="relative  flex justify-center items-center w-full h-full smd:h-auto sm:py-20 md:py-[140px]  smd:px-8">
          <div className="absolute  inset-0 mix-blend-luminosity bg-cover object-fit opacity-30 bg-about-bg2 bg-no-repeat" />
          <div
            className="relative flex justify-between   xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS
          smd:flex-col smd:gap-[60px] items-center"
          >
            <div className="flex w-fit xxl:max-w-[970px]">
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
                  100% of donations from this project will be directed to the
                  Voices of Children charity fund, which has been providing
                  psychological and psychosocial support, as well as
                  humanitarian aid, to children and families affected by war
                  since 2015. Since the full-scale invasion, the fund has helped
                  over 105,000 children and parents.
                  <br />
                  <br />
                  With 11 centers and mobile teams offering psychological
                  assistance across Ukraine, the fund also equips children's
                  spaces in remote communities—creating sensory rooms and
                  playgrounds where children in difficult conditions can feel
                  safe and supported. Their mission is that no child in Ukraine
                  should be left alone with the trauma of war, and we are
                  committed to supporting this cause together.
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
                      <p className="text-primWhite responsive-heading font-primaryRegular">
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
                    <p className="text-primWhite responsive-heading font-primaryRegular">
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
