import { Formik, Form } from "formik";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import PrivacySec from "./PrivacySec";
import FormEl, {
  ConsentField,
  CountryField,
  FocusFirstError,
} from "./Elements/FormEl";
import { ShipmentDetails, useShipment } from "@/zustand/shipmentStore";
import { SubmitSchema } from "@/utilities/FormSchema";
import { useStage } from "@/zustand/stageStore";
import { useMainStore } from "@/zustand/mainOrderStore";
import { useCart } from "@/zustand/productStore";
import SummaryUniversal from "./SummaryUniversal";
import { BackLink, CheckoutGrid, StepHeading } from "./CheckoutShared";

const DetailsForm = () => {
  const navigate = useNavigate();
  const shipmentStore = useShipment((state) => state.shipment);
  const setStage = useStage((state) => state.setStage);
  const submitShipment = useMainStore((state) => state.submitForm);
  const setDefaultAdress = useMainStore((state) => state.setDefaultAdress);
  const products = useCart((state) => state.items);
  const subTotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CheckoutGrid
      aside={
        <>
          <SummaryUniversal subTotal={subTotal} shippingFee={0}>
            <button
              type="submit"
              form="details-form"
              className="btn-primary btn-lg w-full"
            >
              Continue to shipment
              <ArrowRight className="h-5 w-5" />
            </button>
            <BackLink to="/checkout/contribution" label="Back to cart" />
          </SummaryUniversal>
          <PrivacySec />
        </>
      }
    >
      <StepHeading
        title="Your details"
        description="We'll send your digital gifts to this email and use this address for delivery."
      />
      <Formik
        initialValues={shipmentStore}
        validationSchema={SubmitSchema}
        onSubmit={(values: ShipmentDetails, { setSubmitting }) => {
          setDefaultAdress(values);
          submitShipment(values, nanoid());
          setSubmitting(false);
          setStage(3);
          navigate("/checkout/shipment");
        }}
      >
        <Form id="details-form" noValidate className="card p-5 md:p-8">
          <FocusFirstError />
          <fieldset>
            <legend className="heading-3 mb-5">Contact</legend>
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
          </fieldset>

          <hr className="my-8 border-primPurple/10" />

          <fieldset>
            <legend className="heading-3 mb-5">Delivery address</legend>
            <div className="grid gap-5 md:grid-cols-2">
            <CountryField className="md:col-span-2" />
            <FormEl
              title="Street address"
              element="street_adress"
              autoComplete="address-line1"
              isRequired
              className="md:col-span-2"
            />
            <FormEl
              title="Street address line 2"
              element="street_adress2"
              autoComplete="address-line2"
              className="md:col-span-2"
            />
            <FormEl
              title="Town/City"
              element="city"
              autoComplete="address-level2"
              isRequired
            />
            <FormEl
              title="Postal code"
              element="postal_code"
              autoComplete="postal-code"
              isRequired
            />
            </div>
          </fieldset>
        </Form>
      </Formik>
    </CheckoutGrid>
  );
};

export default DetailsForm;
