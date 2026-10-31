import { Formik, Form } from "formik";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import PrivacySec from "@/components/PrivacySec";
import FormEl, { ConsentField, FocusFirstError } from "@/components/Elements/FormEl";
import SummaryUniversal from "@/components/SummaryUniversal";
import { BackLink, CheckoutGrid, StepHeading } from "@/components/CheckoutShared";
import { SubmitSchemaWO } from "@/utilities/FormSchema";
import { useStage } from "@/zustand/stageStore";
import { useMainStore } from "@/zustand/mainOrderStore";
import { ShipmentDetails, useShipment } from "@/zustand/shipmentStore";
import { useDonation } from "@/zustand/donationStore";

const DetailsFormWO = () => {
  const navigate = useNavigate();
  const addAdress = useDonation((state) => state.addAdress);
  const donations = useDonation((state) => state.items);
  const submitShipment = useMainStore((state) => state.submitForm);
  const adressStore = useShipment((state) => state.shipment);
  const setStage = useStage((state) => state.setStage);
  const resetShipmentsMain = useShipment((state) => state.resetShipments);

  const totalFee = donations.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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

  return (
    <CheckoutGrid
      aside={
        <>
          <SummaryUniversal subTotal={totalFee} shippingFee={0} isDonation>
            <button
              type="submit"
              form="details-form"
              className="btn-primary btn-lg w-full"
            >
              Continue to payment
              <ArrowRight className="h-5 w-5" />
            </button>
            <BackLink to="/checkout-donation/contribution" />
          </SummaryUniversal>
          <PrivacySec />
        </>
      }
    >
      <StepHeading
        title="Your details"
        description="We'll email your Digital Gift Package and donation certificate to this address."
      />
      <Formik
        initialValues={defaultValues}
        validationSchema={SubmitSchemaWO}
        onSubmit={(values: ShipmentDetails, { setSubmitting }) => {
          resetShipmentsMain();
          submitShipment(values, nanoid());
          addAdress(values);
          setSubmitting(false);
          setStage(4);
          navigate("/checkout-donation/payment");
        }}
      >
        <Form id="details-form" noValidate className="card p-5 md:p-8">
          <FocusFirstError />
          <div className="grid gap-5 md:grid-cols-2">
            <FormEl
              title="First name"
              element="first_name"
              autoComplete="given-name"
              isRequired
            />
            <FormEl
              title="Last name"
              element="last_name"
              autoComplete="family-name"
              isRequired
            />
            <FormEl
              title="Email address"
              element="email"
              type="email"
              autoComplete="email"
              isRequired
            />
            <FormEl
              title="Mobile phone"
              element="phone"
              type="tel"
              autoComplete="tel"
            />
            <ConsentField />
          </div>
        </Form>
      </Formik>
    </CheckoutGrid>
  );
};

export default DetailsFormWO;
