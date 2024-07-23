import { ProductElProps } from "@/utilities/interfaces";
import { Link } from "react-router-dom";

const ProductEl = ({ title, to, imgPath }: ProductElProps) => {
  return (
    <li className="w-prodW">
      <img src={imgPath} alt="image of a book" />
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
      </div>
    </li>
  );
};

export default ProductEl;
