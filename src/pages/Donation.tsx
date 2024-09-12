import DonationGreet from "@/components/DonationGreet";
import DonationLink from "@/components/DonationLink";
// import Footer from "@/components/Footer";
import Products from "@/components/Products";
import ProductsIncluded from "@/components/ProductsIncluded";

const Donation = () => {
  return (
    <>
      <DonationGreet />
      <Products />
      <DonationLink />
      <ProductsIncluded />
      {/* <Footer /> */}
    </>
  );
};

export default Donation;
