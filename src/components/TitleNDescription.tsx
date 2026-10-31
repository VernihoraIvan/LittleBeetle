import { titleProps } from "@/utilities/interfaces";

const TitleNDescription = ({ title, description }: titleProps) => {
  return (
    <div className="flex max-w-3xl flex-col gap-4 pb-12 pt-32 md:pb-16 md:pt-40 lg:pt-48">
      <h1 className="heading-display text-primWhite">{title}</h1>
      <p className="body-lg text-primWhiteFaint">{description}</p>
    </div>
  );
};

export default TitleNDescription;
