import { Outlet } from "react-router-dom";
import Header from "./Header";

const SharedLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SharedLayout;
