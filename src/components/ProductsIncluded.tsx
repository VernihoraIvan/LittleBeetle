import { extraProducts } from "@/utilities/data";
import ProductElOptional from "./Elements/ProductElOptional";

const ProductsIncluded = () => {
  return (
    <section
      className="flex justify-center bg-primBeige pt-bookPT xs:pt-16    pb-0
 
    smd:px-8"
    >
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS">
        <h2 className="font-primaryBold mb-6  text-primPurple responsive-heading uppercase">
          Optional Printed Gifts
        </h2>
        <div className="flex flex-col justify-between items-center">
          <div>
            <ul className="flex gap-5 xl:gap-5 xs:flex-col">
              {extraProducts &&
                extraProducts.map((product) => (
                  <ProductElOptional product={product} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsIncluded;
