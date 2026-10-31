import { ChevronDown } from "lucide-react";
import mainTitleUrl from "@/assets/icons/main-title.svg";

const Description = () => {
  return (
    <section className="surface-dark relative flex min-h-[100svh] items-center overflow-hidden bg-primPurple">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[80%_40%]"
      >
        <source src="/anIntro-improved-desk.mp4" type="video/mp4" />
      </video>
      {/* keeps the nav and title legible over bright frames */}
      <div className="absolute inset-0 bg-gradient-to-b from-primPurple/50 via-transparent to-primPurple/40" />

      <div className="page-container relative">
        <h1>
          <img
            src={mainTitleUrl}
            alt="The Great Journey of a Little Beetle"
            fetchPriority="high"
            className="h-auto w-full max-w-[300px] md:max-w-[440px] lg:max-w-[600px]"
          />
        </h1>
      </div>

      <a
        href="#about-project"
        aria-label="Scroll to the project description"
        className="absolute bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-primWhite/80 transition-colors hover:bg-primWhite/10 hover:text-primWhite md:bottom-10"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Description;
