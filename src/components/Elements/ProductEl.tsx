import { ProductElProps } from "@/utilities/interfaces";

const ProductEl = ({ title, imgPath, description }: ProductElProps) => {
  return (
    <li className="flex flex-col">
      <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
        <img
          className="h-full w-full object-cover"
          src={imgPath[0]}
          alt={title}
          loading="lazy"
        />
      </div>
      <h3 className="heading-3 mt-5">{title}</h3>
      {description && (
        <p className="body mt-2 text-primPurpleFaint">{description}</p>
      )}
    </li>
  );
};

export default ProductEl;
