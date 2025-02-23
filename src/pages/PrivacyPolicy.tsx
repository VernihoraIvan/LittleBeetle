import Title from "@/components/Title";

const PrivacyPolicy = () => {
  return (
    <>
      <Title title="Privacy Policy" />
      <div className="max-w-3xl mx-auto p-6">
        {/* <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1> */}
        {/* <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1> */}
        <p className="text-sm mb-4">Last updated: 9th February 2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our website, make a donation, or
            interact with our content. Our project is a non-profit private
            initiative created by a group of volunteers who developed a lullaby,
            its music, multilingual recordings, and illustrated books, as well
            as digital and physical art pieces. We offer these materials in
            exchange for donations to support our initiative.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p>
            When you interact with our website, we may collect the following
            information:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              Personal Information: When making a donation or requesting a
              product, you may provide your name, email address, and shipping
              details.
            </li>
            <li>
              Payment Information: Donations are processed through secure
              third-party payment providers. We do not store or have access to
              your financial details.
            </li>
            <li>
              Technical Data: We may collect anonymous usage data, such as IP
              addresses and browser types, to improve our website's
              functionality.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              To process and fulfill donations and deliver digital and physical
              products.
            </li>
            <li>
              To communicate with you regarding your donation, delivery, or
              inquiries.
            </li>
            <li>
              To improve our website, user experience, and project offerings.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell or rent your personal information. However, we may
            share your information in the following cases:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              With service providers who assist with payment processing and
              delivery.
            </li>
            <li>If required by law or to protect our rights and safety.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We take appropriate measures to protect your personal information
            from unauthorized access or misuse. However, no online platform can
            guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Your Rights and Choices
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              Request access to, update, or delete your personal information.
            </li>
            <li>Opt out of receiving non-essential communications from us.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy as needed. Any changes will be
            posted on this page with a revised date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            If you have any questions or requests regarding this Privacy Policy,
            please contact us at{" "}
            <span className="text-blue-700">
              <a href="mailto:info@littlebeetle.org ">info@littlebeetle.org</a>
            </span>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
