import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import About from "./pages/About";
import Donation from "./pages/Donation";
import Creators from "./pages/Creators";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import SubDonationPage from "./pages/SubDonationPage";
import Checkout from "./pages/Checkout";
import CheckoutSection from "./components/CheckoutSection";
import CheckoutWO from "./pages/CheckoutWO";
import CheckoutWOSection from "./components/CheckoutSectionsWithoutProduct/CheckoutWOSection";
import DonationComplete from "./components/DonationComplete";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<About />} />
          <Route path="/complete" element={<DonationComplete />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donation/:product" element={<SubDonationPage />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />}>
            <Route path=":step" element={<CheckoutSection />} />
          </Route>
          <Route path="/checkout-donation" element={<CheckoutWO />}>
            <Route path=":step" element={<CheckoutWOSection />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
