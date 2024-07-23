import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const SharedLayout = () => {
  return (
    <div className="">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
