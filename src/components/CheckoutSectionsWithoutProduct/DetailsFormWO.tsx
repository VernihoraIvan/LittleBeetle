import { Formik, Form, FormikHelpers } from "formik";
import PrivacySec from "@/components/PrivacySec";
import { useNavigate } from "react-router-dom";
import FormEl from "@/components/Elements/FormEl";
import { PersonalData } from "@/utilities/interfaces";
import { SubmitSchemaWO } from "@/utilities/FormSchema";
import { useStage } from "@/zustand/stageStore";
import { useDonation } from "@/zustand/donationStore";

const DetailsFormWO = () => {
  const navigate = useNavigate();
  const addAdress = useDonation((state) => state.addAdress);
  const setStage = useStage((state) => state.setStage);
  const adressStore = { firstName: "", lastName: "", email: "", phone: "" };

  return (
    <section className="pt-buttonP">
      <Formik
        initialValues={adressStore}
        validationSchema={SubmitSchemaWO}
        onSubmit={(
          values: PersonalData,
          { setSubmitting }: FormikHelpers<PersonalData>
        ) => {
          setSubmitting(false);
          addAdress(values);
          console.log("values", values);
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
              className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px] mt-9"
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
