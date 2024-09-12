import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <div className="">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
