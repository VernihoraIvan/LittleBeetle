import { extraProducts } from "@/utilities/data";
import ProductElOptional from "./Elements/ProductElOptional";

const ProductsIncluded = () => {
  return (
    <section
      className="flex justify-center bg-primBeige pt-bookPT pb-prodPB 
    xl:pb-[200px]
      lg:pb-[120px]
    smd:pb-[60px]  smd:px-8"
    >
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS">
        <h2
          className="font-primaryBold mb-6 text-primPurple text-titleS
        xl:text-[28px]
        lg:text-[22px]
        smd:text-[22px]"
        >
          Optional Printed Gifts
        </h2>
        <div className="flex flex-col justify-between items-center">
          <div>
            <ul className="flex gap-10 xl:gap-5 xs:flex-col">
              {extraProducts &&
                extraProducts.map((product) => (
                  <ProductElOptional
                    key={product.title}
                    title={product.title}
                    description={product.description}
                    imgPath={product.imagePath}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsIncluded;
