// import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import Title from "@/components/Title";
import { Outlet } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex flex-col ">
      <Title title="Checkout" />
      <ProgressBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Checkout;
