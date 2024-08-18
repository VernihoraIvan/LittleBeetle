import { Formik, Form, FormikHelpers } from "formik";
import PrivacySec from "@/components/PrivacySec";
import { useNavigate } from "react-router-dom";
import FormEl from "@/components/Elements/FormEl";
import { MyFormValues } from "@/utilities/interfaces";
import { SubmitSchema } from "@/utilities/FormSchema";
import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";

const DetailsFormWO = () => {
  const navigate = useNavigate();

  const submitShipment = useShipment((state) => state.submitForm);
  const shipmentStore = useShipment((state) => state.shipment);
  const setStage = useStage((state) => state.setStage);

  return (
    <section className="pt-buttonP">
      <Formik
        initialValues={shipmentStore}
        validationSchema={SubmitSchema}
        onSubmit={(
          values: MyFormValues,
          { setSubmitting }: FormikHelpers<MyFormValues>
        ) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          submitShipment(values);
          navigate("/checkout-donation/payment");
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
            </ul>
            <PrivacySec />
            <button
              className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-2xl mt-9"
              type="submit"
              onClick={() => setStage(4)}
            >
              CONTINUE TO NEXT
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default DetailsFormWO;
