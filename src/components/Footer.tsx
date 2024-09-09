import LinkedInLogo from "@/assets/icons/linkedIn.svg?react";
import InstagramLogo from "@/assets/icons/instagram.svg?react";
import MailLogo from "@/assets/icons/mail.svg?react";

const Footer = () => {
  return (
    <footer className="flex justify-center py-10 bg-primPurple">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS flex justify-between items-center">
        <div className="flex ">
          <div className="">
            <div className="flex gap-6 mb-6">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInLogo />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogo />
              </a>
              <a href="mailto:tes@mail.com" target="_blank" rel="noreferrer">
                <MailLogo />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-copyS font-secondaryRegular text-primWhiteFaint">
                Terms and conditions
              </p>
              <p className="text-copyS font-secondaryRegular text-primWhiteFaint">
                Privacy policy
              </p>
            </div>
          </div>
        </div>
        <p className="text-primWhiteFaint text-copyS font-secondaryRegular ">
          copyright © 2024 A Great Journey of a Little Beetle. all rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
