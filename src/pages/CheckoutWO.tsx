// import Footer from "@/components/Footer";
import ProgressBarWO from "@/components/ProgressBarWO";
import Title from "@/components/Title";
import { Outlet } from "react-router-dom";

const CheckoutWO = () => {
  return (
    <div className="flex flex-col ">
      <Title title="Checkout" />
      <ProgressBarWO />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default CheckoutWO;
