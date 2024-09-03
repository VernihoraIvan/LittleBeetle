import { extraProducts } from "@/utilities/data";
import ProductElOptional from "./Elements/ProductElOptional";

const ProductsIncluded = () => {
  return (
    <section className="flex justify-center bg-primBeige pt-bookPT pb-prodPB">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS">
        <h2 className="font-primaryBold mb-6 text-primPurple  text-titleS">
          Optional Printed Gifts
        </h2>
        <div className="flex flex-col justify-between items-center">
          <div>
            <ul className="flex gap-10">
              {extraProducts &&
                extraProducts.map((product) => (
                  <ProductElOptional
                    key={product.title}
                    to={product.to}
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
