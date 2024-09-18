import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
// import Home from "./pages/Home";
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
import PopUp from "./components/PopUpTest";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<string | number>("");
  console.log(value);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index path="/" element={<Home />} /> */}
        <Route index path="/" element={<About />} />
        <Route path="/complete" element={<DonationComplete />} />
        <Route
          path="/test"
          element={
            <PopUp
              defaultVal={"Language"}
              setValue={setValue}
              value={["English", "Spanish", "Ukrainian"]}
            />
          }
        />

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
  );
}

export default App;
