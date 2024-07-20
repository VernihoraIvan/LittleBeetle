import { useCart } from "@/zustand/store";
import PurchaseEl from "./PurchaseEl";
import Summary from "./Summary";
import TitleBar from "./TitleBar";

const Basket = () => {
  const products = useCart((state) => state.items);

  const subTotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <section className="flex justify-center bg-primBeige  py-titleM">
      <div className="xxl:w-contW flex justify-between gap-bookPB">
        <div className="xxl:w-contW ">
          <TitleBar />
          {products.length > 0 &&
            products.map((product) => (
              <PurchaseEl
                key={product.name}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                total={product.price * product.quantity}
              />
            ))}
        </div>
        <Summary subTotal={subTotal} shippingFee={5} />
      </div>
    </section>
  );
};
export default Basket;
