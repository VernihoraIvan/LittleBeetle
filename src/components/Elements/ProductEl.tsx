import { ProductElProps } from "@/utilities/interfaces";

const ProductEl = ({ title, imgPath, description }: ProductElProps) => {
  return (
    <li className="flex-1">
      <img className="w-full h-imgH2" src={imgPath[0]} alt="image of a book" />
      <h3 className=" mt-prodMar leading-relaxed text-secBlack text-buttonS font-secondaryBold">
        {title}
      </h3>
      <p className="mt-4">{description}</p>
    </li>
  );
};

export default ProductEl;
