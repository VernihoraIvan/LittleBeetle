import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <div className="min:min-h-screen flex flex-col justify-between flex-col items-center w-screen bg-primBeige">
      <div className="w-full">
        <Header />
        <div className="flex flex-col items-center">
          <main className=" flex flex-col items-center w-full ">
            <div className="w-full ">
              <Outlet />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SharedLayout;
