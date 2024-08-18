import { useParams } from "react-router-dom";
// import CheckoutShipment from "./CheckoutSections/CheckoutShipment";
import CheckoutContributionWO from "./CheckoutSectionsWithoutProduct/CheckoutContributionWO";
import CheckoutDetailsWO from "./CheckoutSectionsWithoutProduct/CheckoutDetailsWO";
import PaymentSectionWO from "./PaymentSectionWO";

const CheckoutWOSection = () => {
  const { step } = useParams();
  const renderStep = () => {
    switch (step) {
      case "contribution":
        return <CheckoutContributionWO />;
      case "details":
        return <CheckoutDetailsWO />;
      // case "shipment":
      //   return <CheckoutShipment />;
      case "payment":
        return <PaymentSectionWO />;
      default:
        return <CheckoutContributionWO />;
    }
  };
  return (
    <section className="flex justify-center bg-primBeige pt-bookPT pb-purchElH">
      <div className="xxl:w-contW">{renderStep()}</div>
    </section>
  );
};

export default CheckoutWOSection;
