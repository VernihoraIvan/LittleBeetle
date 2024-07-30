import { includedProducts } from "@/utilities/data";
import WidgetEl from "./Elements/WidgetEl";
import Alert from "@/assets/icons/alert-circle.svg?react";

const CartIncludedWidget = () => {
  return (
    <section className="flex justify-center bg-primBeige pb-buttonP mt-bookPT">
      <div className="flex justify-start xxl:w-contW">
        <div className=" p-10 border border-bgPurple xxl:w-cartCont">
          <h3 className="text-primPurple text-2xl font-secondaryBold uppercase mb-6">
            Included with every purchase
          </h3>
          <ul className="flex justify-between">
            {includedProducts &&
              includedProducts.map((item) => (
                <WidgetEl
                  key={item.element}
                  title={item.title}
                  imgPath={item.imagePath}
                />
              ))}
          </ul>
          <div className="flex gap-gapS mt-7">
            <Alert />
            <p className="font-secondaryRegular text-copyS text-primPurple">
              You can download digital files immediately after payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartIncludedWidget;
