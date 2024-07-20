import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Donation from "./pages/Donation";
import Creators from "./pages/Creators";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import SubDonationPage from "./pages/SubDonationPage";
// import SubDonationSection from "./components/SubDonationEl";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donation" element={<Donation />} />

        <Route path="/donation/:product" element={<SubDonationPage />}>
          {/* <Route path="book" element={<SubDonationSection />} />
          <Route path="digital-book" element={<SubDonationSection />} />
          <Route path="lullaby" element={<SubDonationSection />} />
          <Route path="postcards" element={<SubDonationSection />} /> */}
        </Route>
        <Route path="/creators" element={<Creators />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
