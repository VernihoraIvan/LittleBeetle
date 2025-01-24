import { Formik, Form, FormikHelpers } from "formik";
import PrivacySec from "@/components/PrivacySec";
import { useNavigate } from "react-router-dom";
import FormEl from "@/components/Elements/FormEl";
// import { PersonalData } from "@/utilities/interfaces";
import { SubmitSchemaWO } from "@/utilities/FormSchema";
import { useStage } from "@/zustand/stageStore";
// import { useDonation } from "@/zustand/donationStore";
import { useMainStore } from "@/zustand/mainOrderStore";
import { nanoid } from "nanoid";
import { ShipmentDetails, useShipment } from "@/zustand/shipmentStore";
import { useDonation } from "@/zustand/donationStore";
// import ButtonTo from "../ButtonTo";

const DetailsFormWO = () => {
  const navigate = useNavigate();
  const addAdress = useDonation((state) => state.addAdress);
  const donations = useDonation((state) => state.items);
  const submitShipment = useMainStore((state) => state.submitForm);
  const mainShipmentStore = useMainStore((state) => state.shipment);
  const adressStore = useShipment((state) => state.shipment);
  // const submitForm = useShipment((state) => state.submitForm);
  const setStage = useStage((state) => state.setStage);
  // const setDefaultAdress = useDonation((state) => state.setDefaultAdress);
  // const resetShipments = useDonation((state) => state.resetShipments);
  const resetShipmentsMain = useShipment((state) => state.resetShipments);
  console.log("mainShipmentStore: ", mainShipmentStore);
  const defaultValues = {
    first_name: adressStore.first_name,
    last_name: adressStore.last_name,
    email: adressStore.email,
    phone: adressStore.phone,
    default_delivery_fee: adressStore.default_delivery_fee,
    duration: adressStore.duration,
    delivery_fee: adressStore.delivery_fee,
  };
  const id = nanoid();
  const shipment = useMainStore((state) => state.shipment);

  console.log("shipment IN dETAILS FORM WO MAINE STORE: ", shipment);

  console.log("adressStore: ", adressStore);
  return (
    <section className="pt-buttonP ">
      <Formik
        initialValues={defaultValues}
        validationSchema={SubmitSchemaWO}
        onSubmit={async (
          values: ShipmentDetails,
          { setSubmitting }: FormikHelpers<ShipmentDetails>
        ) => {
          console.log("values", values);
          // resetShipments();
          resetShipmentsMain();
          // addAdress(values);
          // setDefaultAdress(values);
          submitShipment(values, id);
          // submitForm(values, id);
          addAdress(values);
          setSubmitting(false);
          console.log("values", values);
          console.log("adressStore: ", adressStore);
          console.log("donations: ", donations);

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
              // className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px] mt-9"
              className="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px]
          xl:text-[20px]
          lg:text-[18px]
          smd:text-[18px] 
          sm:w-full sm:px-0 sm:block"
              type="submit"
              onClick={() => setStage(4)}
            >
              CONTINUE TO NEXT
            </button>
            {/* <ButtonTo
              onClick={() => setStage(4)}
              to="/checkout-donation/payment"
              title="CONTINUE TO NEXT"
              style="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px]
          xl:text-[20px]
          lg:text-[18px]
          smd:text-[18px] 
          sm:w-full sm:px-0 sm:block"
            /> */}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default DetailsFormWO;
