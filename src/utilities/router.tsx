import ErrorPage from "../pages/ErrorPage.tsx";
import About from "../pages/About.tsx";
import Donation from "../pages/Donation.tsx";
import Creators from "../pages/Creators.tsx";
import Contact from "../pages/Contact.tsx";
import Cart from "../pages/Cart.tsx";
import App from "../App.tsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "donation",
    element: <Donation />,
  },
  {
    path: "creators",
    element: <Creators />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);
