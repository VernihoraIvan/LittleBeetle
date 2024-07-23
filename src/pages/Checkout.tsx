import CheckoutSection from "@/components/CheckoutSection";
import Footer from "@/components/Footer";
import Title from "@/components/Title";

const Checkout = () => {
  return (
    <div className="flex flex-col ">
      <Title title="Checkout" />
      <CheckoutSection />
      <Footer />
    </div>
  );
};

export default Checkout;
