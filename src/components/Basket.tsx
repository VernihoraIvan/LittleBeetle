import { useCart } from "@/zustand/productStore";
import PurchaseEl from "@/components/Elements/PurchaseEl";
import Summary from "./Summary";
import TitleBar from "./TitleBar";
import { includedProducts, extraProducts } from "@/utilities/data";

const Basket = () => {
  const products = useCart((state) => state.items);

  const subTotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const productToDisplay = includedProducts.concat(extraProducts);

  return (
    <section className="flex justify-center bg-primBeige  py-titleM">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS flex justify-between gap-bookPB">
        <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS ">
          <TitleBar />
          {products.length > 0 &&
            products.map((product) => (
              <PurchaseEl
                language={product.itemLanguage}
                key={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                total={product.price * product.quantity}
                imgPath={
                  productToDisplay.find((p) => p.title === product.name)
                    ?.imagePath
                }
                id={product.id}
              />
            ))}
        </div>
        <Summary subTotal={subTotal} shippingFee={0} />
      </div>
    </section>
  );
};
export default Basket;
