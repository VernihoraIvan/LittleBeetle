import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import PrivacySec from "./PrivacySec";
import { useNavigate } from "react-router-dom";
import { countries } from "@/utilities/data";
import FormEl from "./Elements/FormEl";
import { MyFormValues } from "@/utilities/interfaces";
import { SubmitSchema } from "@/utilities/FormSchema";
import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";
import { nanoid } from "nanoid";
import { useMainStore } from "@/zustand/mainOrderStore";

const DetailsForm = () => {
  const navigate = useNavigate();
  const shipmentStore = useShipment((state) => state.shipment);
  const setStage = useStage((state) => state.setStage);
  const submitShipment = useMainStore((state) => state.submitForm);
  const setDefaultAdress = useMainStore((state) => state.setDefaultAdress);
  const id = nanoid();

  return (
    <section className="pt-buttonP">
      <Formik
        initialValues={shipmentStore}
        validationSchema={SubmitSchema}
        onSubmit={async (
          values: MyFormValues,
          { setSubmitting }: FormikHelpers<MyFormValues>
        ) => {
          setDefaultAdress(values);
          setSubmitting(false);
          submitShipment(values, id);
          navigate("/checkout/shipment");
        }}
      >
        {({ errors, touched }) => (
          <Form className=" ">
            <ul className="flex flex-col gap-9">
              <FormEl
                errors={errors.firstName}
                touched={touched}
                title="First name"
                element="firstName"
                isRequired={true}
              />
              <FormEl
                errors={errors.lastName}
                touched={touched}
                title="Last name"
                element="lastName"
                isRequired={true}
              />
              <FormEl
                errors={errors.email}
                touched={touched}
                title="Email Address"
                element="email"
                isRequired={true}
              />
              <FormEl
                errors={errors.phone}
                touched={touched}
                title="Mobile phone"
                element="phone"
              />
              <li className="flex flex-col ">
                <label
                  className="font-secondaryBold text-[24px]"
                  htmlFor="country"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  name="country"
                  className={`w-prodW cursor-pointer outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-[24px] font-secondaryRegular ${
                    errors.country && touched.country ? "border-red-500" : ""
                  }`}
                >
                  <option className="text-[24px]" value="" label="Select" />
                  {countries.map((country) => (
                    <option key={country} value={country} label={country} />
                  ))}
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500"
                />
              </li>
              <FormEl
                errors={errors.streetAdress}
                touched={touched}
                title="Street address"
                element="streetAdress"
                isRequired={true}
              />
              <FormEl
                errors={errors.streetAdress2}
                touched={touched}
                title="Street address line 2"
                element="streetAdress2"
              />
              <FormEl
                errors={errors.city}
                touched={touched}
                title="Town/City"
                element="city"
                isRequired={true}
              />
              <FormEl
                errors={errors.postalCode}
                touched={touched}
                title="Postal code"
                element="postalCode"
                isRequired={true}
              />
            </ul>
            <PrivacySec />
            <button
              className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px] mt-9"
              type="submit"
              onClick={() => setStage(3)}
            >
              NEXT STEP
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default DetailsForm;
