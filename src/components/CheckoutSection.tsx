import { useParams } from "react-router-dom";
import CheckoutContribution from "./CheckoutSections/CheckoutContribution";
import CheckoutDetails from "./CheckoutSections/CheckoutDetails";
import CheckoutShipment from "./CheckoutSections/CheckoutShipment";
import CheckoutPayment from "./CheckoutSections/CheckoutPayment";

const CheckoutSection = () => {
  const { step } = useParams();
  const renderStep = () => {
    switch (step) {
      case "contribution":
        return <CheckoutContribution />;
      case "details":
        return <CheckoutDetails />;
      case "shipment":
        return <CheckoutShipment />;
      case "payment":
        return <CheckoutPayment />;
      default:
        return <CheckoutContribution />;
    }
  };
  return (
    <section className="flex justify-center bg-primBeige pt-bookPT pb-purchElH smd:py-[40px] ">
      <div className="  lg:px-[60px] md:px-[40px] w-full">{renderStep()}</div>
    </section>
  );
};

export default CheckoutSection;
