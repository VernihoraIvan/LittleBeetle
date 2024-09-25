import { TitleProps } from "@/utilities/interfaces";

const Title = ({ title }: TitleProps) => {
  return (
    <section
      className="flex justify-center bg-primPurple pt-[110px] pb-[110px]
    xl:pb-[90px]
    lg:pb-[60px]
    smd:pb-[40px] 
    xs:pt-[40px]"
    >
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD smd:pl-[40px] sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS">
        {title && (
          <h2
            className="mt-16 text-titleS font-primaryBold text-primWhite 
          xl:text-[28px]
          xl:mt-10
          lg:text-[22px]
          lg:mt-8
          md:text-[22px]
          smd:mt-6
          sm:text-[22px]"
          >
            {title}
          </h2>
        )}
      </div>
    </section>
  );
};
export default Title;
