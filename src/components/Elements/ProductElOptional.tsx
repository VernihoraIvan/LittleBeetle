import { ProductElProps } from "@/utilities/interfaces";
import ButtonTo from "../ButtonTo";

const ProductElOptional = ({ title, imgPath, to }: ProductElProps) => {
  return (
    <li className="flex-1">
      <img
        className="h-imgH2 w-full object-cover"
        src={imgPath[0]}
        alt="image of a book"
      />
      <h3
        className=" mt-prodMar leading-relaxed text-secBlack text-buttonS font-secondaryBold
      xl:text-linkS"
      >
        {title}
      </h3>
      <div className="flex justify-between mt-9">
        <ButtonTo
          to={`${to}`}
          style="hover:bg-whiteHover transition duration-300 w-full text-addCartS font-secondarySBold border border-primPurple text-primPurple py-3 block text-center
          xl:text-linkS"
          title="Learn more"
        />
      </div>
    </li>
  );
};
export default ProductElOptional;
