import ProgressBar from "@/components/ProgressBar";
import Title from "@/components/Title";

import { Outlet } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex flex-col  ">
      <div className="hidden xxl:block absolute top-0 left-0 w-screen h-[220px] bg-primPurple" />

      <Title title="Checkout" />
      <div className="px-[120px] xxl:px-[175px] min:py-0 py-10 lg:px-[60px] smd:px-[20px] bg-primBeige">
        <ProgressBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Checkout;
