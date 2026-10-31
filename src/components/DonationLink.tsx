import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const DonationLink = () => {
  return (
    <section className="bg-primBeige py-6 md:py-8">
      <div className="page-container">
        <div className="surface-dark rounded-3xl bg-primPurple px-6 py-10 text-center shadow-lift md:px-12 md:py-14 lg:px-20 lg:py-16">
          <p className="body-lg mx-auto max-w-2xl text-primWhiteFaint">
            Every donation, regardless of size, now includes access to our
            Digital Gift Package: a digital illustrated book, a lullaby
            recording, and a personalized digital donation certificate. You can
            now choose to complete your donation.
          </p>
          <Link
            to="/checkout-donation/contribution"
            className="btn-accent btn-lg mt-8 w-full md:w-auto"
          >
            Donate now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonationLink;
