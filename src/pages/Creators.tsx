import CreatorsEl from "@/components/Elements/CreatorsEl";
import TitleNDescription from "@/components/TitleNDescription";
import { creatorsData } from "@/utilities/data";

const Creators = () => {
  return (
    <div className=" bg-gradient-to-b from-primPurple to-primPurple w-screen  overflow-x-hidden">
      <section className="relative flex justify-center pt-headerPad">
        <div className="absolute inset-0 mix-blend-luminosity object-fit bg-custom-50-150 bg-cover w-screen bg-no-repeat opacity-30 bg-creators-bg" />

        <div className="relative xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px] xxs:w-[320px] smd:px-8">
          <TitleNDescription
            title="Creators"
            description="The book and lullaby was crafted by over 15 volunteers from around the world. They donated their talents to create this project, from beautiful illustrations to a soothing melody, to inspire hope and healing."
          />
        </div>
      </section>
      <section className="flex justify-center pt-navPad ">
        <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px] xxs:w-[320px] smd:px-8">
          {creatorsData.map((el) => (
            <CreatorsEl
              key={el.name}
              name={el.name}
              location={el.location}
              description={el.description}
              link={el.link}
            />
          ))}
          <div className="mt-20 mb-purchElH smd:mb-[80px]">
            <h3
              className="font-secondaryBold text-buttonS text-primWhite mb-3
            xl:text-[28px]
            lg:text-[22px]
            smd:text-[18px]"
            >
              To Our Supporters Behind the Scenes
            </h3>
            <p
              className="font-secondaryRegular text-[24px] text-primWhiteFaint
            xl:text-[20px]
            lg:text-[16px]
            smd:text-[14px]"
            >
              We want to express our deepest gratitude to the remarkable
              volunteers whose behind-the-scenes contributions have been vital
              in making this project a reality. We are truly humbled by their
              generosity and the lasting impact they will have on young lives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creators;
