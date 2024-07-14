import { CreatorsElProps } from "@/utilities/interfaces";
import Link from "@/assets/icons/external-link.svg?react";

const CreatorsEl = ({ name, location, description }: CreatorsElProps) => {
  return (
    <div className="py-CreatorsElP  border-b border-primWhiteFaint">
      <div className="flex flex justify-between gap-3">
        <div className="flex flex-col gap-gapS">
          <h3 className="font-secondaryBold text-buttonS text-primWhite">
            {name}
          </h3>
          <p className="text-secondaryRegular text-2xl text-primWhiteFaint">
            {location}
          </p>
        </div>
        <div className="h-fit-content cursor-pointer flex justify-center items-center gap-2 border border-primWhiteFaintM py-3  w-60 ">
          <p className="text-linkS font-primaryRegular text-primWhite">
            Website
          </p>
          <Link />
        </div>
      </div>
      <p className="py-2 text-primWhite text-linkS font-secondaryRegular">
        {description}
      </p>
    </div>
  );
};
export default CreatorsEl;
