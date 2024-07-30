import { ProductElProps } from "@/utilities/interfaces";

const WidgetEl = ({ title, imgPath }: ProductElProps) => {
  return (
    <li>
      <img className="h-purchElH w-imgW" src={imgPath[0]} alt={title} />
      <h4 className="mt-3 text-secBlack text-xl font-secondarySBold">
        {title}
      </h4>
    </li>
  );
};

export default WidgetEl;
