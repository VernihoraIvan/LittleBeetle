import ProductEl from "@/components/ProductEl";

const Products = () => {
  return (
    <section className="flex justify-center bg-primBeige pt-bookPT pb-prodPB">
      <div className="xxl:w-contW">
        <h2 className="font-primaryBold mb-26 text-primPurple  text-titleS">
          Products
        </h2>
        <div className="flex flex-col justify-between items-center">
          <div>
            <ul className="grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-28">
              <ProductEl
                title="The book"
                description="one sentence description one sentence description one sentence description one sentence description."
              />
              <ProductEl
                title="The lullaby audio recording"
                description="one sentence description one sentence description one sentence description one sentence description."
              />
              <ProductEl
                title="Postcards"
                description="one sentence description one sentence description one sentence description one sentence description."
              />
              <ProductEl
                title="Poster"
                description="one sentence description one sentence description one sentence description one sentence description."
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
