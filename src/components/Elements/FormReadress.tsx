import { ChangeEvent } from "react";
import { Formik, Form, FormikProps } from "formik";
import FormEl, { CountryField } from "@/components/Elements/FormEl";
import { SubmitSchema } from "@/utilities/FormSchema";
import { ShipmentDetails } from "@/zustand/shipmentStore";
import { useMainStore } from "@/zustand/mainOrderStore";

interface FormReadressProps {
  id: string;
  initialValues: ShipmentDetails;
  onSubmitRef: (instance: FormikProps<ShipmentDetails> | null) => void;
}

const FormReadress = ({ id, initialValues, onSubmitRef }: FormReadressProps) => {
  const addShipment = useMainStore((state) => state.addShipment);

  return (
    <Formik
      innerRef={onSubmitRef}
      initialValues={initialValues}
      validationSchema={SubmitSchema}
      onSubmit={(values: ShipmentDetails, { setSubmitting }) => {
        addShipment(values, id);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange }) => (
        <Form noValidate className="mt-5 grid gap-5 md:grid-cols-2">
          <FormEl
            title="First name"
            element="first_name"
            autoComplete="off"
            isRequired
            idPrefix={id}
          />
          <FormEl
            title="Last name"
            element="last_name"
            autoComplete="off"
            isRequired
            idPrefix={id}
          />
          <FormEl
            title="Email address"
            element="email"
            type="email"
            autoComplete="off"
            isRequired
            idPrefix={id}
          />
          <FormEl
            title="Mobile phone"
            element="phone"
            idPrefix={id}
            type="tel"
            autoComplete="off"
          />
          <CountryField
            idPrefix={id}
            className="md:col-span-2"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              handleChange(e);
              // update the delivery estimate as soon as the country changes
              addShipment({ ...values, country: e.target.value }, id);
            }}
          />
          <FormEl
            title="Street address"
            element="street_adress"
            autoComplete="off"
            isRequired
            idPrefix={id}
            className="md:col-span-2"
          />
          <FormEl
            title="Street address line 2"
            element="street_adress2"
            idPrefix={id}
            autoComplete="off"
            className="md:col-span-2"
          />
          <FormEl
            title="Town/City"
            element="city"
            autoComplete="off"
            isRequired
            idPrefix={id}
          />
          <FormEl
            title="Postal code"
            element="postal_code"
            autoComplete="off"
            isRequired
            idPrefix={id}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormReadress;
