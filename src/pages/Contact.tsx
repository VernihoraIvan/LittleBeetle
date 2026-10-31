import TitleNDescription from "@/components/TitleNDescription";
import LinkedInLogo from "@/assets/icons/LinkedN.svg?react";
import InstagramLogo from "@/assets/icons/instagram1.svg?react";
import EmailLogo from "@/assets/icons/envelope.svg?react";
import { ArrowUpRight } from "lucide-react";

const channels = [
  {
    href: "https://www.linkedin.com/company/creative-branch-org",
    label: "LinkedIn",
    detail: "Creative Branch",
    Icon: LinkedInLogo,
  },
  {
    href: "https://www.instagram.com/littlebeetle.charity?igsh=ZnFkcmR5bXExbzAx",
    label: "Instagram",
    detail: "@littlebeetle.charity",
    Icon: InstagramLogo,
  },
  {
    href: "mailto:info@littlebeetle.org",
    label: "Email",
    detail: "info@littlebeetle.org",
    Icon: EmailLogo,
  },
];

const Contact = () => {
  return (
    <section className="surface-dark relative flex min-h-[100svh] bg-primPurple">
      <div className="absolute inset-0 bg-contacts-bg bg-cover bg-center opacity-40 mix-blend-luminosity" />
      <div className="page-container relative pb-20 md:pb-28">
        <TitleNDescription
          title="Contact Us"
          description="Connect with us on LinkedIn, Instagram, or via email for inquiries and updates."
        />
        <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
          {channels.map(({ href, label, detail, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-center gap-5 rounded-2xl bg-primBeige p-5 text-primPurple shadow-card transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lift md:flex-col md:items-start md:p-8"
              >
                <Icon className="h-11 w-11 shrink-0 md:h-14 md:w-14" />
                <span className="flex flex-1 flex-col">
                  <span className="heading-3">{label}</span>
                  <span className="caption text-primPurple/60">{detail}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-primPurple/40 transition-colors group-hover:text-primPurple md:hidden" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
