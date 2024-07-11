import { TitleProps } from "@/utilities/interfaces";

const Title = ({ title }: TitleProps) => {
  return (
    <section className="flex justify-center bg-primPurple pt-bookPT pb-bookPB">
      <div className="xxl:w-contW">
        <h2 className="mt-titleM text-titleS font-primaryBold text-primWhite">
          {title}
        </h2>
      </div>
    </section>
  );
};
export default Title;
