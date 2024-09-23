import { titleProps } from "@/utilities/interfaces";

const TitleNDescription = ({ title, description }: titleProps) => {
  return (
    <section
      className="flex justify-center pt-purchImgH pb-bookPB 
    xl:pt-[140px]
    lg:pt-[120px]
    smd:pt-[90px]"
    >
      <div className="flex gap-2 justify-center align-center flex-col xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS">
        <h2
          className="font-primaryBold text-primWhite  text-titleS 
         xl:text-[28px]
        lg:text-[22px]
        smd:text-[22px]"
        >
          {title}
        </h2>
        <p
          className="leading-relaxed text-primWhiteFaint  text-[24px] font-secondaryRegular 
        xl:text-[20px]
        lg:text-[16px]
        smd:text-[16px]"
        >
          {description}
        </p>
      </div>
    </section>
  );
};

export default TitleNDescription;
