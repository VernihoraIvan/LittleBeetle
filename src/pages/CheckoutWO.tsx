import ProgressBarWO from "@/components/CheckoutSectionsWithoutProduct/ProgressBarWO";
import Title from "@/components/Title";
import { Outlet } from "react-router-dom";

const CheckoutWO = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Title title="Checkout" />
      <div className="px-[120px] xxl:px-[175px] lg:px-[60px] smd:px-[20px] bg-primBeige">
        <ProgressBarWO />
        <Outlet />
      </div>
    </div>
  );
};

export default CheckoutWO;
