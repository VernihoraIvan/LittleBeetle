import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import PrivacySec from "./PrivacySec";
import { useNavigate } from "react-router-dom";
import { countries } from "@/utilities/data";
import FormEl from "./Elements/FormEl";
import { MyFormValues } from "@/utilities/interfaces";
import { SubmitSchema } from "@/utilities/FormSchema";
import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";
import { getHi, postDonation, updateDonation } from "@/api/connection";
import { nanoid } from "nanoid";
import { useMainStore } from "@/zustand/mainOrderStore";

const DetailsForm = () => {
  const navigate = useNavigate();

  // const submitShipment = useShipment((state) => state.submitForm);
  const shipmentStore = useShipment((state) => state.shipment);
  const setStage = useStage((state) => state.setStage);
  const allowedStage = useStage((state) => state.allowedStage);
  const getProducts = useMainStore((state) => state.products);
  const getShippment = useMainStore((state) => state.shipment);
  const submitShipment = useMainStore((state) => state.submitForm);
  console.log("getProducts", getProducts);
  console.log("getShippment", getShippment);
  const id = nanoid();

  return (
    <section className="pt-buttonP">
      <Formik
        initialValues={shipmentStore}
        validationSchema={SubmitSchema}
        onSubmit={async (
          values: MyFormValues,
          { setSubmitting }: FormikHelpers<MyFormValues>
        ) => {
          if (allowedStage < 3) {
            const res = await postDonation({ ...values, id });
            console.log(res);
          } else {
            console.log("values", values);
            const res = await updateDonation({ ...values, id });
            console.log(res);
          }
          console.log("allowedStage", allowedStage);
          console.log(values);
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          submitShipment(values);
          navigate("/checkout/shipment");
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
            <PrivacySec />
            <button
              className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-2xl mt-9"
              type="submit"
              onClick={() => setStage(3)}
            >
              CONTINUE TO NEXT
            </button>
            <div
              className="bg-purpleHover w-[210px] w-[40px] cursor-pointer"
              onClick={() => getHi()}
            >
              GET HI
            </div>
            <div className="w-[210px] h-[40px] bg-purpleHover cursor-pointer mt-10">
              GET WHOLE STORE
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default DetailsForm;
