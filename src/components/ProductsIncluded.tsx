import { extraProducts } from "@/utilities/data";
import ProductElOptional from "./Elements/ProductElOptional";

const ProductsIncluded = () => {
  return (
    <section
      id="optional-printed-gifts"
      className="section scroll-mt-4 bg-primBeige"
    >
      <div className="page-container">
        <div className="mb-8 max-w-prose md:mb-10">
          <h2 className="heading-1 mb-3">Optional printed gifts</h2>
          <p className="body text-primPurpleFaint">
            Add a printed keepsake to your donation. Delivery is calculated at
            checkout based on your country.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
          {extraProducts.map((product) => (
            <ProductElOptional key={product.title} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsIncluded;
