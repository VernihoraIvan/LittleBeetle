import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import PrivacySec from "./PrivacySec";
import { useNavigate } from "react-router-dom";
import { countries } from "@/utilities/data";
import FormEl from "./Elements/FormEl";

const SubmitSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required."),
  lastName: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Invalid email")
    .required("This field is required."),
});

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  streetAdress: string;
  streetAdress2: string;
  city: string;
  postalCode: string;
}

export interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  streetAdress: string;
  streetAdress2: string;
  city: string;
  postalCode: string;
}

const DetailsForm = () => {
  const navigate = useNavigate();

  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    streetAdress: "",
    streetAdress2: "",
    city: "",
    postalCode: "",
  };

  return (
    <section className="pt-buttonP">
      <Formik
        initialValues={initialValues}
        validationSchema={SubmitSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            console.log(values);
            navigate("/checkout/shipment");
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form className=" ">
            <ul className="flex flex-col gap-9">
              <FormEl
                errors={errors}
                touched={touched}
                title="First name"
                element="firstName"
                isRequired={true}
              />
              <FormEl
                errors={errors}
                touched={touched}
                title="Last name"
                element="lastName"
                isRequired={true}
              />
              <FormEl
                errors={errors}
                touched={touched}
                title="Email Address"
                element="email"
                isRequired={true}
              />
              <FormEl
                errors={errors}
                touched={touched}
                title="Mobile phone"
                element="phone"
              />
              {/* <li className="flex flex-col ">
                <label
                  className="font-secondaryBold text-2xl"
                  htmlFor="firstName"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center mt-4">
                  <Field
                    id="firstName"
                    name="firstName"
                    className={clsx(
                      "w-prodW outline-none  border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular",
                      errors.firstName && touched.firstName && "border-red-500"
                    )}
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="text-alertRed text-linkS font-secondaryRegular ml-4">
                      {errors.firstName}
                    </div>
                  ) : null}
                </div>
              </li> */}
              {/* <li className="flex flex-col mt-9">
                <label
                  className="font-secondaryBold text-2xl"
                  htmlFor="lastName"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <Field
                  className="w-prodW outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                  id="lastName"
                  name="lastName"
                />
              </li> */}
              {/* <li className="flex flex-col mt-9">
                <label className="font-secondaryBold text-2xl" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Field
                  className="w-prodW outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                  id="email"
                  name="email"
                />
              </li> */}
              {/* <li className="flex flex-col mt-9">
                <label className="font-secondaryBold text-2xl" htmlFor="phone">
                  Mobile phone
                </label>
                <Field
                  className="w-prodW outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                  id="phone"
                  name="phone"
                  type="phone"
                />
              </li> */}
              <li className="flex flex-col ">
                {/* <label className="font-secondaryBold text-2xl" htmlFor="country">
                Country <span className="text-red-500">*</span>
              </label>
              <Field
                className="outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                id="country"
                name="country"
                type="country"
              /> */}
                <label
                  className="font-secondaryBold text-2xl"
                  htmlFor="country"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  name="country"
                  className="w-prodW cursor-pointer outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                >
                  <option className="text-2xl" value="" label="Select" />
                  {countries.map((country) => (
                    <option key={country} value={country} label={country} />
                  ))}
                </Field>
              </li>
              <FormEl
                errors={errors}
                touched={touched}
                title="Street address"
                element="streetAdress"
                isRequired={true}
              />
              <FormEl
                errors={errors}
                touched={touched}
                title="Street address line 2"
                element="streetAdress2"
              />
              <FormEl
                errors={errors}
                touched={touched}
                title="Town/City"
                element="city"
                isRequired={true}
              />
              <FormEl
                errors={errors}
                touched={touched}
                title="Postal code"
                element="postalCode"
                isRequired={true}
              />

              {/* <li className="flex flex-col mt-9">
                <label
                  className="font-secondaryBold text-2xl"
                  htmlFor="streetAdress"
                >
                  Street address <span className="text-red-500">*</span>
                </label>
                <Field
                  className="w-prodW outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                  id="streetAdress"
                  name="streetAdress"
                />
              </li> */}
              {/* <li className="flex flex-col mt-9">
                <label
                  className="font-secondaryBold text-2xl"
                  htmlFor="streetAdress2"
                >
                  Street address line 2
                </label>
                <Field
                  className="w-prodW outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                  id="streetAdress2"
                  name="streetAdress2"
                />
              </li> */}
              {/* <li className="flex flex-col mt-9">
                <label className="font-secondaryBold text-2xl" htmlFor="city">
                  Town/City <span className="text-red-500">*</span>
                </label>
                <Field
                  className="w-prodW outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                  id="city"
                  name="city"
                />
              </li> */}
              {/* <li className="flex flex-col mt-9">
                <label
                  className="font-secondaryBold text-2xl"
                  htmlFor="postalCode"
                >
                  Postal code <span className="text-red-500">*</span>
                </label>
                <Field
                  className="w-prodW outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular"
                  id="postalCode"
                  name="postalCode"
                />
              </li> */}
            </ul>
            <PrivacySec />
            <button
              className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-2xl mt-9"
              type="submit"
            >
              CONTINUE TO NEXT
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default DetailsForm;
