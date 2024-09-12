import Basket from "@/components/Basket";
import CartIncludedWidget from "@/components/CartIncludedWidget";
import EmptyCart from "@/components/EmptyCart";
// import Footer from "@/components/Footer";
import Title from "@/components/Title";
import { useCart } from "@/zustand/productStore";

const Cart = () => {
  const product = useCart((state) => state.items);
  return (
    <div className="flex flex-col min-h-screen ">
      <Title title="Your Cart" />
      {product.length > 0 ? (
        <>
          <Basket />
          <CartIncludedWidget />
        </>
      ) : (
        <EmptyCart />
      )}
      {/* <Footer /> */}
    </div>
  );
};
export default Cart;
