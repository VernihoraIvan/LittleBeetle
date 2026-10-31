import { useParams } from "react-router-dom";
import CheckoutContributionWO from "./CheckoutContributionWO";
import DetailsFormWO from "./DetailsFormWO";
import PaymentSectionWO from "./PaymentSectionWO";

const CheckoutWOSection = () => {
  const { step } = useParams();
  const renderStep = () => {
    switch (step) {
      case "contribution":
        return <CheckoutContributionWO />;
      case "details":
        return <DetailsFormWO />;
      case "payment":
        return <PaymentSectionWO />;
      default:
        return <CheckoutContributionWO />;
    }
  };
  return (
    <section>{renderStep()}</section>
  );
};

export default CheckoutWOSection;
