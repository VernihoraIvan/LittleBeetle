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
    <section
      className="pt-buttonP w-screen flex text-[24px]
      xl:text-[18px]
      lg:text-[16px]
      smd:text-[16px]
"
    >
      <Formik
        className="w-[50%] "
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
          <Form className="max-w-full px-20 ">
            <ul className="flex flex-col gap-10 xl:gap-8 lg:gap-5 smd:gap-4 ">
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
                <label className="font-secondaryBold " htmlFor="country">
                  Country <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  name="country"
                  className={` cursor-pointer outline-none border border-primPurpleFaintM py-3 px-4 text-inputPink  font-secondaryRegular 
                    mt-4 xl:mt-3 lg:mt-2 smd:mt-2 
                    xl:text-[18px] xl:px-4 xl:py-3 lg:text-[14px] lg:px-2 lg:py-[6px] smd:text-[14px] smd:px-2 smd:py-[6px]${
                      errors.country && touched.country ? "border-red-500" : ""
                    }`}
                >
                  <option className="" value="w-full" label="Select" />
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
              className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT  mt-9"
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
