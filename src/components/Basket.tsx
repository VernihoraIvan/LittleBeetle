import { useCart } from "@/zustand/store";
import PurchaseEl from "./PurchaseEl";
import Summary from "./Summary";
import TitleBar from "./TitleBar";

const Basket = () => {
  const products = useCart((state) => state.items);
  console.log(products);
  return (
    <section className="flex justify-center bg-primBeige  py-titleM">
      <div className="xxl:w-contW flex justify-between gap-bookPB">
        <div className="xxl:w-contW ">
          <TitleBar />
          <PurchaseEl
            name=" The lullaby audio recording"
            price={5}
            quantity={1}
            total={5}
          />
        </div>
        <Summary />
      </div>
    </section>
  );
};
export default Basket;
