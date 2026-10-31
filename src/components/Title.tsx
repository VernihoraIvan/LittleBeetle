import { TitleProps } from "@/utilities/interfaces";

/** Purple page band that sits under the absolute header. */
const Title = ({ title }: TitleProps) => {
  return (
    <section className="surface-dark bg-primPurple pb-10 pt-28 md:pb-14 md:pt-36 lg:pb-16 lg:pt-40">
      <div className="page-container">
        {title && <h1 className="heading-1 text-primWhite">{title}</h1>}
      </div>
    </section>
  );
};
export default Title;
