// import CheckoutSection from "@/components/CheckoutSection";
// import CheckoutSection from "@/components/CheckoutSection";
// import CheckoutContribution from "@/components/CheckoutSections/CheckoutContribution";
// import CheckoutDetails from "@/components/CheckoutSections/CheckoutDetails";
// import CheckoutPayment from "@/components/CheckoutSections/CheckoutPayment";
// import CheckoutShipment from "@/components/CheckoutSections/CheckoutShipment";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
// import ProgressBar from "@/components/ProgressBar";
import Title from "@/components/Title";
import { Outlet, useParams } from "react-router-dom";

const Checkout = () => {
  const { step } = useParams();
  console.log(step);
  return (
    <div className="flex flex-col ">
      <Title title="Checkout" />
      <ProgressBar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Checkout;
