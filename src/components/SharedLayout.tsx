import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-primBeige">
      <Header />
      <main className="flex-1 overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
