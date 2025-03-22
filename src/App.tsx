import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import About from "./pages/About";
import Donation from "./pages/Donation";
import Creators from "./pages/Creators";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Checkout from "./pages/Checkout";
import CheckoutSection from "./components/CheckoutSection";
import CheckoutWO from "./pages/CheckoutWO";
import CheckoutWOSection from "./components/CheckoutSectionsWithoutProduct/CheckoutWOSection";
import DonationComplete from "./pages/DonationComplete";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Test from "./pages/Test";
import ProductComplete from "./pages/ProductComplete";

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
          <Route path="/product-complete" element={<ProductComplete />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/donation" element={<Donation />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/test" element={<Test />} />
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
