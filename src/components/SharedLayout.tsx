import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between flex-col items-center w-screen bg-primBeige">
      <div className="w-full">
        <Header />
        <div className="flex flex-col items-center">
          <main className="max-w-[1564px] flex flex-col items-center  ">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SharedLayout;
