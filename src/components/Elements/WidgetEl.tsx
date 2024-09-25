import { ProductElProps } from "@/utilities/interfaces";

const WidgetEl = ({ title, imgPath }: ProductElProps) => {
  return (
    <li>
      <img
        className="h-purchElH w-imgW md:h-[115px] xsm:h-[115px] object-cover"
        src={imgPath[0]}
        alt={title}
      />
      <h4
        className="mt-3 text-secBlack text-xl font-secondarySBold
          xl:text-[18px]
          lg:text-[16px]
          smd:text-[14px]"
      >
        {title}
      </h4>
    </li>
  );
};

export default WidgetEl;
