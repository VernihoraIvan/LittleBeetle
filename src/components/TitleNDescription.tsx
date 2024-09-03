import { titleProps } from "@/utilities/interfaces";

const TitleNDescription = ({ title, description }: titleProps) => {
  return (
    <section className="flex justify-center pt-purchImgH pb-bookPB ">
      <div className="flex gap-2 justify-center align-center flex-col xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS">
        <h2 className="font-primaryBold text-primWhite  text-titleS">
          {title}
        </h2>
        <p className="leading-relaxed text-primWhiteFaint w-[1110px] text-2xl font-secondaryRegular">
          {description}
        </p>
      </div>
    </section>
  );
};

export default TitleNDescription;
