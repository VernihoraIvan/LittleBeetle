import { useParams } from "react-router-dom";
import CheckoutContribution from "./CheckoutSections/CheckoutContribution";
import DetailsForm from "./DetailsForm";
import CheckoutShipment from "./CheckoutSections/CheckoutShipment";
import PaymentSection from "./PaymentSection";

const CheckoutSection = () => {
  const { step } = useParams();
  const renderStep = () => {
    switch (step) {
      case "contribution":
        return <CheckoutContribution />;
      case "details":
        return <DetailsForm />;
      case "shipment":
        return <CheckoutShipment />;
      case "payment":
        return <PaymentSection />;
      default:
        return <CheckoutContribution />;
    }
  };
  return (
    <section>{renderStep()}</section>
  );
};

export default CheckoutSection;
