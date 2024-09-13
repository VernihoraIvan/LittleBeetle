import ProgressBar from "@/components/ProgressBar";
import Title from "@/components/Title";
import { Outlet } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex flex-col ">
      <Title title="Checkout" />
      <ProgressBar />
      <Outlet />
    </div>
  );
};

export default Checkout;
