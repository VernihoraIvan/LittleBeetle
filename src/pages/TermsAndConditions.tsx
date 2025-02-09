import Title from "@/components/Title";

const TermsAndConditions = () => {
  return (
    <>
      <Title title="Terms and Conditions" />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-left text-sm text-gray-600 mb-8">
          Last updated: 9th February 2025
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
          <p className="mb-4">
            Welcome to our website. These Terms and Conditions govern your use
            of our platform, including access to our digital and physical
            products, donations, and any related services. By using our website,
            you agree to these terms. If you do not agree, please refrain from
            using our platform.
          </p>
          <p>
            Our project is a non-profit private initiative created by a group of
            volunteers. We developed a lullaby, its music, multilingual
            recordings, and illustrated books, as well as digital and physical
            art pieces. These materials are offered in exchange for donations to
            support our initiative.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">2. Donations and Products</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All products available on our website, including digital and
              physical items, are offered as a token of appreciation for your
              donation.
            </li>
            <li>
              Donations are non-refundable, except in cases where technical
              issues prevent you from receiving your digital product.
            </li>
            <li>
              Delivery costs for physical items are not included in the donation
              amount and must be covered separately by the recipient.
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
          <h2 className="text-xl font-bold mb-3">4. Physical Products</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Physical items, such as printed books, postcards, and posters, are
              available for supporters who cover the necessary donation and
              delivery fees.
            </li>
            <li>
              We are not responsible for delivery delays caused by third-party
              shipping providers.
            </li>
            <li>
              If an item is damaged upon arrival, please contact us within 7
              days with proof of damage.
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
            reach out to us at [Contact Email].
          </p>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
