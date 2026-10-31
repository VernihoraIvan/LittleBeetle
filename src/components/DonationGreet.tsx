import { ChevronDown } from "lucide-react";

const DonationGreet = () => {
  return (
    <section className="surface-dark relative flex min-h-[100svh] items-center overflow-hidden bg-primPurple bg-donation-bg bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primPurple/60 via-primPurple/40 to-primPurple/70" />
      <div className="page-container relative py-32">
        <div className="max-w-3xl">
          <h1 className="heading-display mb-6 text-primWhite">Your Support</h1>
          <p className="body-lg text-primWhiteFaint">
            This project was born from a simple philosophy: whether you donate
            your time, attention, or money, we value these contributions
            immensely. We designed this initiative around the idea of resource
            exchange with everyone involved, ensuring a tangible balance between
            all forms of support. Your donation not only helps provide
            psychological support to children affected by war but also honours
            the collective effort of our global volunteer team. We also hope
            that the products we crafted bring joy to your home and magic to a
            child who will listen to the lullaby and explore the world we
            embodied in this beautiful illustrated book.
          </p>
        </div>
      </div>
      <a
        href="#included"
        aria-label="Scroll to what's included"
        className="absolute bottom-6 left-1/2 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-primWhite/80 transition-colors hover:bg-primWhite/10 hover:text-primWhite md:flex md:bottom-10"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default DonationGreet;
