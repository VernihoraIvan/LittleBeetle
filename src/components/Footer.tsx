import LinkedInLogo from "@/assets/icons/linkedIn.svg?react";
import InstagramLogo from "@/assets/icons/instagram.svg?react";
import MailLogo from "@/assets/icons/mail.svg?react";
import { Link } from "react-router-dom";

const socials = [
  {
    href: "https://www.linkedin.com/company/creative-branch-org",
    label: "LinkedIn",
    Icon: LinkedInLogo,
  },
  {
    href: "https://www.instagram.com/littlebeetle.charity?igsh=ZnFkcmR5bXExbzAx",
    label: "Instagram",
    Icon: InstagramLogo,
  },
  { href: "mailto:info@littlebeetle.org", label: "Email", Icon: MailLogo },
];

const Footer = () => {
  return (
    <footer className="surface-dark bg-primPurple text-primWhiteFaint">
      <div className="page-container flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-6">
          <ul className="flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primWhite/10 transition-colors duration-200 hover:bg-primWhite/20"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 caption">
            <Link
              className="underline-offset-4 hover:text-primWhite hover:underline"
              to="/terms-and-conditions"
            >
              Terms and conditions
            </Link>
            <Link
              className="underline-offset-4 hover:text-primWhite hover:underline"
              to="/privacy-policy"
            >
              Privacy policy
            </Link>
          </nav>
        </div>
        <p className="caption text-primWhiteFaintM">
          © {new Date().getFullYear()} The Great Journey of a Little Beetle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
