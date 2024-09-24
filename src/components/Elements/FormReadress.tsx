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
import clsx from "clsx";

interface FormReadressProps {
  id: string;
  onSubmitRef: (instance: FormikProps<MyFormValues>) => void;
}

const FormReadress = ({ id, onSubmitRef }: FormReadressProps) => {
  const addShipment = useMainStore((state) => state.addShippment);
  const formikRef = useRef<FormikProps<MyFormValues> | null>(null);
  const shipmentStore = useShipment((state) => state.shipment);

  return (
    <section
      className="pt-buttonP flex text-[24px]
      xl:text-[18px]
      lg:text-[16px]
      smd:text-[16px]"
    >
      <Formik
        className="w-[50%] "
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
                  className="font-secondaryBold text-[24px]
                  xl:text-[18px]
                  lg:text-[16px]
                  smd:text-[16px]"
                  htmlFor="country"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  name="country"
                  // className={clsx(
                  //   "w-full outline-none  border border-primPurpleFaintM py-3 px-4 text-inputPink text-[24px] font-secondaryRegular xl:text-[18px] xl:px-4 xl:py-3 lg:text-[14px] lg:px-2 lg:py-[6px] smd:text-[14px] smd:px-2 smd:py-[6px]",
                  //   errors && touched.firstName && "border-red-500"
                  // )}
                  className={clsx(
                    "cursor-pointer outline-none border border-primPurpleFaintM py-3 px-4 text-inputPink  font-secondaryRegular mt-4 xl:mt-3 lg:mt-2 smd:mt-2 xl:text-[18px] xl:px-4 xl:py-3 lg:text-[14px] lg:px-2 lg:py-[6px] smd:text-[14px] smd:px-2 smd:py-[6px]"
                  )}
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
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormReadress;
