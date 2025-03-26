import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import PrivacySec from "./PrivacySec";
import { useNavigate } from "react-router-dom";
import { availableCountries } from "@/utilities/data";
import FormEl from "./Elements/FormEl";
import { ShipmentDetails } from "@/zustand/shipmentStore";
import { SubmitSchema } from "@/utilities/FormSchema";
import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";
import { nanoid } from "nanoid";
import { useMainStore } from "@/zustand/mainOrderStore";
import clsx from "clsx";

const DetailsForm = () => {
  const navigate = useNavigate();
  const shipmentStore = useShipment((state) => state.shipment);
  const setStage = useStage((state) => state.setStage);
  const submitShipment = useMainStore((state) => state.submitForm);
  const setDefaultAdress = useMainStore((state) => state.setDefaultAdress);
  const id = nanoid();

  return (
    <section
      className=" flex responsive-text  sm:pt-10  pt-20
      "
    >
      <Formik
        className="w-[50%] "
        initialValues={shipmentStore}
        validationSchema={SubmitSchema}
        onSubmit={async (
          values: ShipmentDetails,
          { setSubmitting }: FormikHelpers<ShipmentDetails>
        ) => {
          setDefaultAdress(values);
          setSubmitting(false);
          submitShipment(values, id);
          navigate("/checkout/shipment");
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className=" px-20 smd:px-0">
            <ul className="flex flex-col gap-10 xl:gap-8 lg:gap-5 smd:gap-4 ">
              <FormEl
                errors={errors.first_name}
                touched={touched}
                title="First name"
                element="first_name"
                isRequired={true}
              />
              <FormEl
                errors={errors.last_name}
                touched={touched}
                title="Last name"
                element="last_name"
                isRequired={true}
              />
              <FormEl
                errors={errors.email}
                touched={touched}
                title="Email Address"
                element="email"
                isRequired={true}
              />
              <Field
                type="checkbox"
                name="email_consent"
                className="w-5 h-5 border border-primPurpleFaintM rounded-sm"
              >
                {() => (
                  <div className="flex flex-col">
                    <div className="flex items-start gap-2 mt-2 ">
                      <div
                        className={`relative w-5 h-5 cursor-pointer border ${
                          errors.email_consent && touched.email_consent
                            ? "border-red-500"
                            : "border-primPurpleFaintM"
                        } rounded flex items-center justify-center`}
                        onClick={() =>
                          setFieldValue("email_consent", !values.email_consent)
                        }
                        role="checkbox"
                        aria-checked={!!values.email_consent}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setFieldValue(
                              "email_consent",
                              !values.email_consent
                            );
                          }
                        }}
                      >
                        {values.email_consent && (
                          <div className="w-3 h-3 bg-primPurpleFaintM rounded-sm"></div>
                        )}
                      </div>
                      <p className="font-secondaryRegular text-primPurpleFaintM text-sm w-[80%] max-w-[800px]">
                        I agree to receive emails containing my Digital Gift
                        Package, project updates, and other relevant
                        information. I understand that my personal details will
                        be used in accordance with the{" "}
                        <a
                          href="/privacy-policy"
                          className="underline text-primPurple hover:text-blue-700 font-secondaryBold"
                        >
                          Privacy Policy
                        </a>{" "}
                        and that I can unsubscribe at any time.
                      </p>
                    </div>
                    {errors.email_consent && touched.email_consent && (
                      <div className="text-red-500 text-sm mt-1 ml-7">
                        {errors.email_consent}
                      </div>
                    )}
                  </div>
                )}
              </Field>
              <FormEl
                errors={errors.phone}
                touched={touched}
                title="Mobile phone"
                element="phone"
              />
              <li className="flex flex-col max-w-[500px]">
                <label className="font-secondaryBold " htmlFor="country">
                  Country <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  name="country"
                  className={clsx(
                    "smd:w-full rounded-none cursor-pointer outline-none border border-primPurpleFaintM py-3 px-4 text-inputPink  font-secondaryRegular mt-4 xl:mt-3 lg:mt-2 smd:mt-2 xl:text-[18px] xl:px-4 xl:py-3 lg:text-[14px] lg:px-2 lg:py-[6px] smd:text-[14px] smd:px-2 smd:py-[6px]"
                  )}
                >
                  <option className="" value="w-full" label="Select" />
                  {availableCountries.map((country) => (
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
                errors={errors.street_adress}
                touched={touched}
                title="Street address"
                element="street_adress"
                isRequired={true}
              />
              <FormEl
                errors={errors.street_adress2}
                touched={touched}
                title="Street address line 2"
                element="street_adress2"
              />
              <FormEl
                errors={errors.city}
                touched={touched}
                title="Town/City"
                element="city"
                isRequired={true}
              />
              <FormEl
                errors={errors.postal_code}
                touched={touched}
                title="Postal code"
                element="postal_code"
                isRequired={true}
              />
            </ul>
            <PrivacySec />
            <button
              className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT  mt-9
          xl:text-[20px]
          lg:text-[18px]
          smd:text-[16px]
          sm:w-full sm:px-0 xs:mb-10"
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
