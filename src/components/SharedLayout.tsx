import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const SharedLayout = () => {
  return (
    <div className="">
      <div>
        <Header />
        <main /*className="object-fit bg-cover bg-center w-screen h-screen bg-home-bg"*/
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
