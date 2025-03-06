import { Formik, Form, FormikHelpers } from "formik";
import PrivacySec from "@/components/PrivacySec";
import { useNavigate } from "react-router-dom";
import FormEl from "@/components/Elements/FormEl";
import { SubmitSchemaWO } from "@/utilities/FormSchema";
import { useStage } from "@/zustand/stageStore";
import { useMainStore } from "@/zustand/mainOrderStore";
import { nanoid } from "nanoid";
import { ShipmentDetails, useShipment } from "@/zustand/shipmentStore";
import { useDonation } from "@/zustand/donationStore";
import { useState } from "react";

const DetailsFormWO = () => {
  const navigate = useNavigate();
  const addAdress = useDonation((state) => state.addAdress);
  const submitShipment = useMainStore((state) => state.submitForm);
  const adressStore = useShipment((state) => state.shipment);
  const setStage = useStage((state) => state.setStage);
  const resetShipmentsMain = useShipment((state) => state.resetShipments);
  const [emailConsent, setEmailConsent] = useState(false);

  const defaultValues: ShipmentDetails = {
    first_name: adressStore.first_name,
    last_name: adressStore.last_name,
    email: adressStore.email,
    phone: adressStore.phone,
    default_delivery_fee: 0,
    duration: 0,
    delivery_fee: 0,
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
          resetShipmentsMain();
          submitShipment(values, id);
          addAdress(values);
          setSubmitting(false);
          navigate("/checkout-donation/payment");
          navigate("/checkout-donation/payment");
        }}
      >
        {({ errors, touched }) => (
          <Form className=" ">
            <ul className="flex flex-col gap-9">
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
                setEmailConsent={setEmailConsent}
                emailConsent={emailConsent}
              />
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
