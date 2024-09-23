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
    <section className="flex justify-center bg-primBeige pt-bookPT pb-purchElH">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS">
        {renderStep()}
      </div>
    </section>
  );
};

export default CheckoutWOSection;
