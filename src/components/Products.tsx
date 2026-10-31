import ProductEl from "@/components/Elements/ProductEl";
import { includedProducts } from "@/utilities/data";

const Products = () => {
  return (
    <section id="included" className="section scroll-mt-4 bg-primBeige pb-10 md:pb-12 lg:pb-16">
      <div className="page-container">
        <h2 className="heading-1 mb-8 md:mb-10">Included with every donation</h2>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5 lg:gap-8">
          {includedProducts.map((product) => (
            <ProductEl
              key={product.title}
              title={product.title}
              description={product.description}
              imgPath={product.imagePath}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
