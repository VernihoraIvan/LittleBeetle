import Title from "@/components/Title";

const TermsAndConditions = () => {
  return (
    <>
      <Title title="Terms and Conditions" />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-left text-sm text-gray-600 mb-8">
          Last updated: 26th February 2025
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
          <p className="mb-4">
            Welcome to our website. These Terms and Conditions govern your use
            of our platform, including access to our digital products,
            donations, and any related services. By using our website, you agree
            to these terms.{" "}
            <span className="font-bold">
              If you do not agree, please refrain from using our platform.
            </span>
          </p>
          <p>
            Our project is a non-profit private initiative created by a group of
            volunteers. We developed a lullaby, its music, multilingual
            recordings, and illustrated books, which are our digital products.
            These materials are provided as gifts to everyone who would like to
            receive them, with the aim of encouraging donations to support our
            initiative.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">2. Donations and Products</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All digital products available on our website, including lullaby
              recordings, books, and certificates, are offered as a gift to
              anyone who wishes to receive them.
            </li>
            <li>
              Donations are non-refundable, except in cases where technical
              issues prevent you from receiving your digital product.
            </li>
            <li>
              We are not a registered non-profit but a personal volunteer
              initiative. We do not sell products but provide them as gifts to
              encourage donations supporting the initiative.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">3. Digital Products</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Digital materials, including lullaby recordings, books, and
              certificates, are provided as downloadable files.
            </li>
            <li>
              You may not distribute, sell, or modify the digital content for
              commercial purposes without our explicit permission.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">
            4. Donations and Redirection to Voices of Children
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Donations made through our platform are processed via a Stripe
              account registered to Maria Shumeiko, the producer of the project.
            </li>
            <li>
              Full Redirection: All donations received are fully redirected to
              Voices of Children, a charitable organization dedicated to helping
              children affected by war and trauma.
            </li>
            <li>
              Transaction Fees: Stripe may charge processing fees for handling
              transactions. While we do not control these fees, we have
              visibility into the amount charged. For example, from a £3
              donation, £2.75 is available for redirection after Stripe deducts
              its service fee.
            </li>
            <li>
              No Personal Benefit: No individual involved in this initiative,
              including Maria Shumeiko, retains any portion of the donations for
              personal use. Every donation, after the necessary payment
              processing fee, is transferred in full to Voices of Children.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">5. Intellectual Property</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All content on this website, including the lullaby, illustrations,
              recordings, and text, is protected by copyright laws.
            </li>
            <li>
              You may not reproduce or use our content for commercial purposes
              without permission.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">6. Limitation of Liability</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We provide our website and content "as is" without warranties of
              any kind.
            </li>
            <li>
              We are not responsible for any indirect, incidental, or
              consequential damages resulting from your use of our website or
              products.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">7. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms and Conditions at any
            time. Any changes will be posted on this page with the updated date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            reach out to us at{" "}
            <a
              href="mailto:info@littlebeetle.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              info@littlebeetle.com
            </a>
          </p>
        </section>

        <p className="mt-8 text-center">
          Thank you for your support and for helping us make a difference!
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;
