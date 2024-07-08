import { Outlet } from "react-router-dom";
import Header from "./Header";

const SharedLayout = () => {
  return (
    <div className="">
      <div>
        <Header />
        <main /*className="object-fit bg-cover bg-center w-screen h-screen bg-custom-image"*/
        >
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
