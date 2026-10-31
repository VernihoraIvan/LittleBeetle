import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { includedProducts } from "@/utilities/data";

const BooksSection = () => {
  return (
    <section id="about-project" className="section scroll-mt-4 bg-primBeige">
      <div className="page-container">
        <div className="max-w-prose">
          <h2 className="heading-1 mb-5">About the project</h2>
          <p className="body-lg text-primPurpleFaint">
            Over 15 creative professionals from around the world have come
            together to craft a lullaby and an illustrated book, offered
            exclusively on a donation basis, along with several other products.
            Every item is designed to bring some comfort and joy, while
            channelling all proceeds to support children affected by the war in
            Ukraine. Our mission is to help provide psychological rehabilitation
            and raise crucial funds for the organisation delivering this vital
            care.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:gap-5 lg:gap-6">
          {includedProducts.map((product) => (
            <li
              key={product.title}
              className="group aspect-[4/3] overflow-hidden rounded-2xl shadow-card"
            >
              <img
                loading="lazy"
                src={product.imagePath[0]}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col items-center gap-3 md:mt-16 md:flex-row md:justify-center">
          <Link to="/creators" className="btn-outline btn-lg w-full md:w-auto">
            Meet the creators
          </Link>
          <Link
            to="/donation"
            className="btn-primary btn-lg w-full md:w-auto"
          >
            Support the project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
