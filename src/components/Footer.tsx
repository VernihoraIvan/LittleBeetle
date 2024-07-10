import LinkedInLogo from "../assets/icons/linkedIn.svg?react";
import InstagramLogo from "../assets/icons/instagram.svg?react";
import MailLogo from "../assets/icons/mail.svg?react";

const Footer = () => {
  return (
    <footer className="flex justify-center h-40 bg-primPurple">
      <div className="xxl:w-contW flex justify-between items-center">
        <div>
          <ul className="flex gap-6">
            <li>
              <LinkedInLogo />
            </li>
            <li>
              <InstagramLogo />
            </li>
            <li>
              <MailLogo />
            </li>
          </ul>
        </div>
        <p className="text-primWhiteFaint text-copyS font-secondaryRegular">
          copyright © 2024 A Great Journey of a Little Beetle. all rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
