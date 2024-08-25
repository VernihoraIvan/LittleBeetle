import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  ErrorMessage,
  FormikProps,
} from "formik";
import { countries } from "@/utilities/data";
import FormEl from "@/components/Elements/FormEl";
import { MyFormValues } from "@/utilities/interfaces";
import { SubmitSchema } from "@/utilities/FormSchema";
import { useShipment } from "@/zustand/shipmentStore";
import { useRef } from "react";
import { useMainStore } from "@/zustand/mainOrderStore";

interface FormReadressProps {
  id: string;
  onSubmitRef: (instance: FormikProps<MyFormValues>) => void;
}

const FormReadress = ({ id, onSubmitRef }: FormReadressProps) => {
  const addShipment = useMainStore((state) => state.addShippment);
  const formikRef = useRef<FormikProps<MyFormValues> | null>(null);
  const shipmentStore = useShipment((state) => state.shipment);

  return (
    <section className="pt-buttonP">
      <Formik
        innerRef={(instance) => {
          formikRef.current = instance;
          onSubmitRef(instance!);
        }}
        initialValues={shipmentStore}
        validationSchema={SubmitSchema}
        onSubmit={(
          values: MyFormValues,
          { setSubmitting }: FormikHelpers<MyFormValues>
        ) => {
          addShipment(values, id);
          setSubmitting(false);
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
                  className="font-secondaryBold text-2xl"
                  htmlFor="country"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  name="country"
                  className={`w-prodW cursor-pointer outline-none mt-4 border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular ${
                    errors.country && touched.country ? "border-red-500" : ""
                  }`}
                >
                  <option className="text-2xl" value="" label="Select" />
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
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormReadress;
