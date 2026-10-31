import { ExternalLink } from "lucide-react";
import VoicesLogo from "@/assets/images/voices-logo.png";

const Goal = () => {
  return (
    <section className="surface-dark relative overflow-hidden bg-primPurple">
      <div className="absolute inset-0 bg-about-bg2 bg-cover bg-center opacity-30 mix-blend-luminosity" />
      <div className="page-container section relative grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div className="max-w-prose">
          <h2 className="heading-1 mb-6 text-primWhite">Our goal</h2>
          <div className="body-lg space-y-5 text-primWhiteFaint">
            <p>
              100% of donations from this project will be directed to the Voices
              of Children charity fund, which has been providing psychological
              and psychosocial support, as well as humanitarian aid, to children
              and families affected by war since 2015. Since the full-scale
              invasion, the fund has helped over 105,000 children and parents.
            </p>
            <p>
              With 11 centers and mobile teams offering psychological assistance
              across Ukraine, the fund also equips children's spaces in remote
              communities—creating sensory rooms and playgrounds where children
              in difficult conditions can feel safe and supported. Their mission
              is that no child in Ukraine should be left alone with the trauma of
              war, and we are committed to supporting this cause together.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-primWhite/[0.06] p-8 ring-1 ring-primWhite/10 md:flex-row md:justify-between lg:flex-col lg:p-10">
          <div className="flex flex-col items-center gap-4 md:flex-row lg:flex-col">
            <img
              className="h-36 w-36 rounded-full md:h-28 md:w-28 lg:h-56 lg:w-56"
              src={VoicesLogo}
              alt="Voices of Children logo"
              loading="lazy"
            />
            <p className="heading-3 text-primWhite">Voices of Children</p>
          </div>
          <a
            href="https://voices.org.ua/en/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-light w-full md:w-auto lg:w-full"
          >
            Learn more
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Goal;
