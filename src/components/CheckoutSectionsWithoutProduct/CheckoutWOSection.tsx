import { useParams } from "react-router-dom";
import CheckoutContributionWO from "./CheckoutContributionWO";
import CheckoutDetailsWO from "./CheckoutDetailsWO";
import PaymentSectionWO from "./PaymentSectionWO";

const CheckoutWOSection = () => {
  const { step } = useParams();
  const renderStep = () => {
    switch (step) {
      case "contribution":
        return <CheckoutContributionWO />;
      case "details":
        return <CheckoutDetailsWO />;
      case "payment":
        return <PaymentSectionWO />;
      default:
        return <CheckoutContributionWO />;
    }
  };
  return (
    <section className="flex justify-center bg-primBeige pt-bookPT pb-purchElH smd:py-[40px]">
      <div className="lg:px-[60px] md:px-[40px] w-full">{renderStep()}</div>
    </section>
  );
};

export default CheckoutWOSection;
