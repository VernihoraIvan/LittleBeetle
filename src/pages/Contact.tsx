import TitleNDescription from "@/components/TitleNDescription";
import LinkedInLogo from "@/assets/icons/LinkedN.svg?react";
import InstagramLogo from "@/assets/icons/instagram1.svg?react";
import EmailLogo from "@/assets/icons/envelope.svg?react";

const Contact = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-primPurple to-primPurple ">
        <div className="flex justify-center mix-blend-luminosity pt-headerPad object-fit bg-cover bg-custom-50-150 bg-no-repeat w-screen  bg-contacts-bg ">
          <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS">
            <div className="flex flex-col justify-between ">
              <TitleNDescription
                title="Contact Us"
                description="Connect with us on LinkedIn, Instagram, or via email for inquiries and updates."
              />
              <ul
                className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS flex gap-[50px] xxl:h-contactH fill-primPurple 
              xl:gap-10"
              >
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="flex-1 bg-pinkGrey rounded-12px flex justify-center items-center xl:h-[240px]"
                >
                  <div className="flex flex-col justify-center items-center gap-5 xl:gap-[14px]">
                    <LinkedInLogo className="w-16 xl:w-[42px]" />
                    <h3 className="text-xl font-primarySBold text-center xl:text-[16px]">
                      Linkedin
                    </h3>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="flex-1 bg-pinkGrey rounded-12px flex justify-center items-center
                  xl:h-[240px]"
                >
                  <div className="flex flex-col justify-center items-center gap-5 xl:gap-[14px]">
                    <InstagramLogo className="w-16 xl:w-[42px]" />
                    <h3 className="text-xl font-primarySBold text-center xl:text-[16px]">
                      Instagram
                    </h3>
                  </div>
                </a>
                <a
                  href="mailto:tes@mail.com"
                  target="_blank"
                  className="flex-1 bg-pinkGrey rounded-12px flex justify-center items-center
                  xl:h-[240px]"
                >
                  <div className="flex flex-col justify-center items-center gap-5 xl:gap-[14px]">
                    <EmailLogo className="w-16 xl:w-[42px]" />
                    <h3 className="text-xl font-primarySBold text-center xl:text-[16px]">
                      Email
                    </h3>
                  </div>
                </a>
              </ul>
            </div>
            <div className="flex justify-between pb-20 mt-40 ">
              {/* <div className="flex gap-[70px]">
                <p className="text-copyS font-secondaryRegular text-primWhiteFaint xl:text-[16px]">
                  Terms and conditions
                </p>
                <p className="text-copyS font-secondaryRegular text-primWhiteFaint xl:text-[16px]">
                  Privacy policy
                </p>
              </div>
              <p className="font-secondaryRegular text-copyS text-primWhiteFaint xl:text-[16px]">
                copyright © 2024 A Great Journey of a Little Beetle. all rights
                reserved
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
