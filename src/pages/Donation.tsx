import DonationGreet from "@/components/DonationGreet";
import DonationLink from "@/components/DonationLink";
import Products from "@/components/Products";
import ProductsIncluded from "@/components/ProductsIncluded";

const Donation = () => {
  return (
    <>
      <DonationGreet />
      <Products />
      <DonationLink />
      <ProductsIncluded />
    </>
  );
};

export default Donation;
