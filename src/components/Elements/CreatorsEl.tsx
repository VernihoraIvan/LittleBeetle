import { CreatorsElProps } from "@/utilities/interfaces";
import Link from "@/assets/icons/external-link.svg?react";

const CreatorsEl = ({ name, location, description }: CreatorsElProps) => {
  return (
    <div className="py-CreatorsElP  border-b border-primWhiteFaint">
      <div className="flex flex justify-between gap-3">
        <div className="flex flex-col gap-gapS">
          <h3 className="font-secondaryBold text-buttonS text-primWhite xl:text-linkS">
            {name}
          </h3>
          <p className="text-secondaryRegular text-2xl text-primWhiteFaint xl:text-copyS">
            {location}
          </p>
        </div>
        <div className="h-fit-content cursor-pointer flex justify-center items-center gap-2 border border-primWhiteFaintM py-3  w-60 ">
          <p className="text-linkS font-primaryRegular text-primWhite xl:text-[16px]">
            Website
          </p>
          <Link />
        </div>
      </div>
      <p className="py-2 text-primWhite text-linkS font-secondaryRegular xl:text-[16px]">
        {description}
      </p>
    </div>
  );
};
export default CreatorsEl;
