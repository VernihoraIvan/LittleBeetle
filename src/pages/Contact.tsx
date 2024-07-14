import TitleNDescription from "@/components/TitleNDescription";
import LinkedInLogo from "@/assets/icons/LinkedN.svg?react";
import InstagramLogo from "@/assets/icons/instagram1.svg?react";
import EmailLogo from "@/assets/icons/envelope.svg?react";

const Contact = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-primPurple to-primPurple ">
        <div className="flex justify-center mix-blend-luminosity pt-headerPad object-fit bg-cover bg-custom-50-150 bg-no-repeat w-screen  bg-contacts-bg ">
          <div className="xxl:w-contW">
            <div className="flex flex-col justify-between ">
              <TitleNDescription
                title="Contact Us"
                description="Connect with us on LinkedIn, Instagram, or via email for inquiries and updates."
              />
              <div className="xxl:w-contW flex gap-[50px] h-contactH fill-primPurple ">
                <a
                  href=""
                  className="flex-1 bg-pinkGrey rounded-12px flex justify-center items-center"
                >
                  <div className="flex flex-col justify-center items-center gap-5">
                    <LinkedInLogo className="w-16" />
                    <h3 className="text-xl font-primarySBold text-center">
                      Linkedin
                    </h3>
                  </div>
                </a>
                <a
                  href=""
                  className="flex-1 bg-pinkGrey rounded-12px flex justify-center items-center"
                >
                  <div className="flex flex-col justify-center items-center gap-5">
                    <InstagramLogo className="w-16" />
                    <h3 className="text-xl font-primarySBold text-center">
                      Instagram
                    </h3>
                  </div>
                </a>
                <a
                  href=""
                  className="flex-1 bg-pinkGrey rounded-12px flex justify-center items-center"
                >
                  <div className="flex flex-col justify-center items-center gap-5">
                    <EmailLogo className="w-16" />
                    <h3 className="text-xl font-primarySBold text-center">
                      Email
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-end pb-20 mt-40">
              <p className="font-secondaryRegular text-copyS text-primWhiteFaint">
                copyright © 2024 A Great Journey of a Little Beetle. all rights
                reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
