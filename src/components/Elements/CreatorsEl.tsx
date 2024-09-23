import { CreatorsElProps } from "@/utilities/interfaces";
import Link from "@/assets/icons/external-link.svg?react";

const CreatorsEl = ({ name, location, description }: CreatorsElProps) => {
  return (
    <div className="py-CreatorsElP  border-b border-primWhiteFaint">
      <div className="flex flex justify-between gap-3">
        <div className="flex flex-col gap-gapS smd:w-[50%]">
          <h3
            className="font-secondaryBold text-buttonS text-primWhite xl:text-linkS
          xl:text-[22px] 
          lg:text-[18px] 
          sm:text-[16px] 
          md:text-[16px]
          smd:text-[16px]"
          >
            {name}
          </h3>
          <p
            className="text-secondaryRegular text-[24px] text-primWhiteFaint xl:text-copyS
          xl:text-[20px] 
          lg:text-[16px] 
          sm:text-[16px] 
          md:text-[14px]
          smd:text-[14px]"
          >
            {location}
          </p>
        </div>
        <div
          className="h-fit-content cursor-pointer flex justify-center items-center gap-2 border border-primWhiteFaintM py-3  w-60 
        smd:w-[50%] smd:py-2"
        >
          <p
            className="text-linkS font-primaryRegular text-primWhite xl:text-[16px]
          xl:text-[20px] 
          lg:text-[16px] 
          sm:text-[16px] 
          md:text-[14px]
          smd:text-[14px]"
          >
            Website
          </p>
          <Link />
        </div>
      </div>
      <p
        className="py-2 text-primWhite text-linkS font-secondaryRegular xl:text-[16px]
          xl:text-[20px] 
          lg:text-[16px] 
          sm:text-[16px] 
          md:text-[14px]
          smd:text-[14px]"
      >
        {description}
      </p>
    </div>
  );
};
export default CreatorsEl;
