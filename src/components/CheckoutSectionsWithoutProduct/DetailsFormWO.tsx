import { Formik, Form, FormikHelpers, Field } from "formik";
import PrivacySec from "@/components/PrivacySec";
import { useNavigate } from "react-router-dom";
import FormEl from "@/components/Elements/FormEl";
import { SubmitSchemaWO } from "@/utilities/FormSchema";
import { useStage } from "@/zustand/stageStore";
import { useMainStore } from "@/zustand/mainOrderStore";
import { nanoid } from "nanoid";
import { ShipmentDetails, useShipment } from "@/zustand/shipmentStore";
import { useDonation } from "@/zustand/donationStore";

const DetailsFormWO = () => {
  const navigate = useNavigate();
  const addAdress = useDonation((state) => state.addAdress);
  const submitShipment = useMainStore((state) => state.submitForm);
  const adressStore = useShipment((state) => state.shipment);
  const setStage = useStage((state) => state.setStage);
  const resetShipmentsMain = useShipment((state) => state.resetShipments);

  const defaultValues: ShipmentDetails = {
    first_name: adressStore.first_name,
    last_name: adressStore.last_name,
    email: adressStore.email,
    phone: adressStore.phone,
    default_delivery_fee: 0,
    duration: 0,
    delivery_fee: 0,
    email_consent: false,
    country: adressStore.country || "",
    street_adress: adressStore.street_adress || "",
    street_adress2: adressStore.street_adress2 || "",
    city: adressStore.city || "",
    postal_code: adressStore.postal_code || "",
  };
  const id = nanoid();

  return (
    <section className="md:pt-buttonP xxs:pt-10">
      <Formik
        initialValues={defaultValues}
        validationSchema={SubmitSchemaWO}
        onSubmit={async (
          values: ShipmentDetails,
          { setSubmitting }: FormikHelpers<ShipmentDetails>
        ) => {
          console.log(values, "values");
          resetShipmentsMain();
          submitShipment(values, id);
          addAdress(values);
          setSubmitting(false);
          navigate("/checkout-donation/payment");
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className=" ">
            <ul className="flex flex-col gap-9 ">
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
            </ul>
            <PrivacySec />
            <button
              className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px]
          xl:text-[20px]
          lg:text-[18px]
          smd:text-[18px] 
          sm:w-full sm:px-0 sm:block"
              type="submit"
              onClick={() => setStage(4)}
            >
              next step
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default DetailsFormWO;
