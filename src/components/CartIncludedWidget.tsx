import { includedProducts } from "@/utilities/data";
import WidgetEl from "./Elements/WidgetEl";
import Alert from "@/assets/icons/alert-circle.svg?react";

const CartIncludedWidget = () => {
  return (
    <section className="flex justify-center bg-primBeige pb-buttonP pt-bookPT">
      <div className="flex justify-start xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-full  xxs:w-contWXSS">
        <div className=" p-10 border border-bgPurple xxl:w-cartCont">
          <h3
            className="text-primPurple text-[24px] font-secondaryBold uppercase mb-6
          xl:text-[20px]
          lg:text-[16px]
          smd:text-[16px]"
          >
            Included with every purchase
          </h3>
          <ul className="flex justify-between gap-5 xxs:flex-col xxs:gap-3">
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
            <p
              className="font-secondaryRegular text-copyS text-primPurple
            xl:text-[18px]
          lg:text-[16px]
          smd:text-[14px]"
            >
              You can download digital files immediately after payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartIncludedWidget;
