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
        <div className="w-full flex flex-col items-center min-h-[calc(100vh-367px)] justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
