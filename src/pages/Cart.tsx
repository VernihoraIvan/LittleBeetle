import Footer from "@/components/Footer";

const Cart = () => {
  return (
    <div className="flex flex-col h-screen">
      <section className="flex justify-center bg-primPurple pt-bookPT pb-bookPB">
        <div className="xxl:w-contW">
          <h2 className="mt-titleM text-titleS font-primaryBold text-primWhite">
            Your Cart
          </h2>
        </div>
      </section>
      <section className="bg-primBeige flex-1">dd</section>
      <Footer />
    </div>
  );
};

export default Cart;
