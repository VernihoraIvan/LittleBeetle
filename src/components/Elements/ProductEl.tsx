import { ProductElProps } from "@/utilities/interfaces";

const ProductEl = ({ title, imgPath, description }: ProductElProps) => {
  return (
    <li className="flex-1 flex flex-col sm:gap-5 xs:justify-center items-center ">
      <img
        className="w-full h-imgH2 object-cover lg:h-[290px] smd:h-[220px] sm:w-[240px] sm:h-[180px]"
        src={imgPath[0]}
        alt="image of a book"
      />
      <div>
        <h3 className=" mt-prodMar text-center leading-relaxed text-secBlack  font-secondaryBold responsive-heading">
          {title}
        </h3>
        <p className="mt-4">{description}</p>
      </div>
    </li>
  );
};

export default ProductEl;
