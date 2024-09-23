import ProductEl from "@/components/Elements/ProductEl";
import { includedProducts } from "@/utilities/data";

const Products = () => {
  return (
    <section className="flex justify-center bg-primBeige pt-bookPT pb-[125px] smd:pb-6 smd:px-8 smd:pt-[60px]">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS">
        <h2
          className="font-primaryBold mb-6 text-primPurple text-titleS
        xl:text-[28px]
        lg:text-[22px]
        smd:text-[22px]"
        >
          Included with every donation
        </h2>
        <div className="flex flex-col justify-between items-center">
          {/* <div> */}
          <ul className="flex gap-5 xs:flex-col xs:gap-10">
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
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Products;
