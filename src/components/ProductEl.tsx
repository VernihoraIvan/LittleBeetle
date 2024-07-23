// import { useState } from "react";
import productImg from "@/assets/images/product.png";
import { ProductElProps } from "@/utilities/interfaces";
// import { useCart } from "@/zustand/store";
import { Link } from "react-router-dom";

const ProductEl = ({ title, to }: ProductElProps) => {
  // const addProduct = useCart((state) => state.addToCart);

  // const [isOverlay, setIsOverlay] = useState<boolean>(false);
  // const [price, setPrice] = useState<number>(0);

  // const handleOverlay = () => {
  //   setIsOverlay(!isOverlay);
  // };

  // const handleAddProduct = (title: string, price: number) => {
  //   if (price > 2) {
  //     addProduct(title, 1, price);
  //     setPrice(0);
  //   }
  // };

  return (
    <li className="w-prodW">
      <img src={productImg} alt="image of a book" />
      <h3 className=" mt-prodMar leading-relaxed text-secBlack text-buttonS font-secondaryBold">
        {title}
      </h3>
      <div className="flex justify-between mt-9">
        <Link
          to={`${to}`}
          className="hover:bg-whiteHover transition duration-300 w-full text-addCartS font-secondarySBold border border-primPurple text-primPurple py-3 block text-center"
        >
          Learn more
        </Link>
        {/* <button
          onClick={() => handleAddProduct(title, price)}
          className="font-secondarySBold text-primWhite text-addCartS  py-3 px-14"
        >
          Add to Cart
        </button> */}
      </div>
    </li>
  );
};

export default ProductEl;
