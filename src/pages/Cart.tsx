import Basket from "@/components/Basket";
import Footer from "@/components/Footer";
import Title from "@/components/Title";

const Cart = () => {
  return (
    <div className="flex flex-col ">
      <Title title="Your Cart" />
      <Basket />
      <Footer />
    </div>
  );
};
export default Cart;
