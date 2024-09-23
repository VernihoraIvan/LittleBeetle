import TitleNDescription from "@/components/TitleNDescription";
import LinkedInLogo from "@/assets/icons/LinkedN.svg?react";
import InstagramLogo from "@/assets/icons/instagram1.svg?react";
import EmailLogo from "@/assets/icons/envelope.svg?react";

const Contact = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-primPurple to-primPurple">
        <div className="flex justify-center mix-blend-luminosity pt-headerPad object-fit bg-cover bg-custom-50-150 bg-no-repeat w-screen  bg-contacts-bg smd:py-16  pb-[100px]">
          <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS">
            <div className="flex flex-col justify-between ">
              <TitleNDescription
                title="Contact Us"
                description="Connect with us on LinkedIn, Instagram, or via email for inquiries and updates."
              />
              <div
                className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS flex gap-[50px] xxl:h-contactH fill-primPurple 
              xl:gap-10
              smd:gap-5"
              >
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="flex-1 bg-pinkGrey rounded-12px flex justify-center items-center 
                  xl:h-[240px] 
                  lg:h-[170px]
                  md:h-[200px]
                  sm:h-[140px]"
                >
                  <div
                    className="flex flex-col justify-center items-center gap-5 xl:gap-[14px] 
                  smd:gap-2"
                  >
                    <LinkedInLogo
                      className="w-16 
                    xl:w-[42px] xl:h-[42px]
                    lg:w-[32px] lg:h-[32px]
                    smd:w-[32px] smd:h-[32px]"
                    />
                    <h3
                      className="text-xl font-primarySBold text-center 
                    xl:text-[16px]
                    lg:text-[14px]
                    smd:text-[14px]"
                    >
                      Linkedin
                    </h3>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="flex-1 bg-pinkGrey rounded-12px flex justify-center items-center
                  xl:h-[240px] 
                  lg:h-[170px]
                  md:h-[200px]
                  sm:h-[140px]"
                >
                  <div
                    className="flex flex-col justify-center items-center gap-5 xl:gap-[14px]
                  smd:gap-2"
                  >
                    <InstagramLogo
                      className="w-16
                    xl:w-[42px] xl:h-[42px]
                    lg:w-[32px] lg:h-[32px]
                    smd:w-[32px] smd:h-[32px]"
                    />
                    <h3
                      className="text-xl font-primarySBold text-center 
                    xl:text-[16px]
                    lg:text-[14px]
                    smd:text-[14px]"
                    >
                      Instagram
                    </h3>
                  </div>
                </a>
                <a
                  href="mailto:tes@mail.com"
                  target="_blank"
                  className="flex-1 bg-pinkGrey rounded-12px flex justify-center items-center
                  xl:h-[240px] 
                  lg:h-[170px]
                  md:h-[200px]
                  sm:h-[140px]"
                >
                  <div
                    className="flex flex-col justify-center items-center gap-5 xl:gap-[14px]
                  smd:gap-2"
                  >
                    <EmailLogo
                      className="w-16
                    xl:w-[42px] xl:h-[42px]
                    lg:w-[32px] lg:h-[32px]
                    smd:w-[32px] smd:h-[32px]"
                    />
                    <h3
                      className="text-xl font-primarySBold text-center 
                    xl:text-[16px]
                    lg:text-[14px]
                    smd:text-[14px]"
                    >
                      Email
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
