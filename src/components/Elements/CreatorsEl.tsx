import { CreatorsElProps } from "@/utilities/interfaces";
import { ExternalLink, MapPin } from "lucide-react";

const CreatorsEl = ({ name, location, description, link }: CreatorsElProps) => {
  return (
    <li className="flex flex-col rounded-2xl bg-primWhite/[0.06] p-6 ring-1 ring-primWhite/10 md:p-8">
      <h3 className="heading-3 text-primWhite">{name}</h3>
      <p className="mt-1 flex items-center gap-1.5 caption text-primWhiteFaintM">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        {location}
      </p>
      <p className="body mt-4 text-primWhiteFaint">
        {name} {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center gap-2 self-start pt-5 font-secondarySBold text-hovYellow underline-offset-4 hover:underline"
      >
        Learn more
        <span className="sr-only"> about {name}</span>
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </li>
  );
};
export default CreatorsEl;
