import ProgressBarWO from "@/components/CheckoutSectionsWithoutProduct/ProgressBarWO";
import Title from "@/components/Title";
import { Outlet } from "react-router-dom";

const CheckoutWO = () => {
  return (
    <div className="flex flex-col ">
      <Title title="Checkout" />
      <ProgressBarWO />
      <Outlet />
    </div>
  );
};

export default CheckoutWO;
