import DonationGreet from "@/components/DonationGreet";
import DonationLink from "@/components/DonationLink";
import Products from "@/components/Products";
import ProductsIncluded from "@/components/ProductsIncluded";

const Donation = () => {
  return (
    <section
      className="pb-prodPB
    xl:pb-[200px]
      lg:pb-[120px]
    smd:pb-[60px]"
    >
      <DonationGreet />
      <Products />
      <DonationLink />
      <ProductsIncluded />
    </section>
  );
};

export default Donation;
