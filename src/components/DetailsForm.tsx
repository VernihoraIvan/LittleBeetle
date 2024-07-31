import { Formik, Form, Field, FormikHelpers } from "formik";
import PrivacySec from "./PrivacySec";
import ButtonTo from "./ButtonTo";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const DetailsForm = () => {
  // const initialValues: MyFormValues = { firstName: "" };
  return (
    <section className="pt-buttonP">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="flex flex-col w-prodW">
          <ul>
            <li className="flex flex-col">
              <label
                className="font-secondaryBold text-2xl"
                htmlFor="firstName"
              >
                First name <span className="text-red-500">*</span>
              </label>
              <Field
                id="firstName"
                name="firstName"
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
              />
            </li>
            <li className="flex flex-col mt-9">
              <label className="font-secondaryBold text-2xl" htmlFor="lastName">
                Last name <span className="text-red-500">*</span>
              </label>
              <Field
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                id="lastName"
                name="lastName"
              />
            </li>
            <li className="flex flex-col mt-9">
              <label className="font-secondaryBold text-2xl" htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Field
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                id="email"
                name="email"
              />
            </li>
            <li className="flex flex-col mt-9">
              <label className="font-secondaryBold text-2xl" htmlFor="phone">
                Mobile phone - optional
              </label>
              <Field
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                id="phone"
                name="phone"
                type="phone"
              />
            </li>
            <li className="flex flex-col mt-9">
              <label className="font-secondaryBold text-2xl" htmlFor="country">
                Country <span className="text-red-500">*</span>
              </label>
              <Field
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                id="country"
                name="country"
                type="country"
              />
            </li>
            <li className="flex flex-col mt-9">
              <label
                className="font-secondaryBold text-2xl"
                htmlFor="streetAdress"
              >
                Street address
              </label>
              <Field
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                id="streetAdress"
                name="streetAdress"
              />
            </li>
            <li className="flex flex-col mt-9">
              <label
                className="font-secondaryBold text-2xl"
                htmlFor="streetAdress2"
              >
                Street address line 2 - optional
              </label>
              <Field
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                id="streetAdress2"
                name="streetAdress2"
              />
            </li>
            <li className="flex flex-col mt-9">
              <label className="font-secondaryBold text-2xl" htmlFor="city">
                Town/City
              </label>
              <Field
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                id="city"
                name="city"
              />
            </li>
            <li className="flex flex-col mt-9">
              <label
                className="font-secondaryBold text-2xl"
                htmlFor="postalCode"
              >
                Postal code
              </label>
              <Field
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                id="postalCode"
                name="postalCode"
              />
            </li>
          </ul>
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
      <PrivacySec />
      <ButtonTo
        to="/checkout/shipment"
        title="CONTINUE TO NEXT"
        style=" text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-2xl"
      />
    </section>
  );
};

export default DetailsForm;
