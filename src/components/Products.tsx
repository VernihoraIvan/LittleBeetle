import ProductEl from "@/components/Elements/ProductEl";
import { includedProducts } from "@/utilities/data";

const Products = () => {
  return (
    <section className="flex justify-center bg-primBeige pt-bookPT pb-prodPB">
      <div className="xxl:w-contW">
        <h2 className="font-primaryBold mb-6 text-primPurple  text-titleS">
          Included with every donation
        </h2>
        <div className="flex flex-col justify-between items-center">
          <div>
            <ul className="flex gap-10">
              {includedProducts &&
                includedProducts.map((product) => (
                  <ProductEl
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

export default Products;
