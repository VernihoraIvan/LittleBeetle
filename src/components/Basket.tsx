import Summary from "./Summary";
import TitleBar from "./TitleBar";

const Basket = () => {
  return (
    <section className="flex justify-center bg-primBeige flex-1 py-titleM">
      <div className="xxl:w-contW flex justify-between gap-bookPB">
        <TitleBar />
        <Summary />
      </div>
    </section>
  );
};
export default Basket;
