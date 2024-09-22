import CreatorsEl from "@/components/Elements/CreatorsEl";
import TitleNDescription from "@/components/TitleNDescription";
import { creatorsData } from "@/utilities/data";

const Creators = () => {
  return (
    <div className="bg-gradient-to-b from-primPurple to-primPurple w-screen  ">
      <section className="flex justify-center mix-blend-luminosity pt-headerPad object-fit bg-custom-50-150 bg-cover w-screen bg-no-repeat  bg-creators-bg ">
        <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS ">
          <TitleNDescription
            title="Creators"
            description="The book and lullaby was crafted by over 15 volunteers from around the world. They donated their talents to create this project, from beautiful illustrations to a soothing melody, to inspire hope and healing."
          />
        </div>
      </section>
      <section className="flex justify-center pt-navPad">
        <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xxs:w-contWXSS ">
          {creatorsData.map((el) => (
            <CreatorsEl
              key={el.name}
              name={el.name}
              location={el.location}
              description={el.description}
            />
          ))}
          <div className="mt-20 mb-purchElH">
            <h3 className="font-secondaryBold text-buttonS text-primWhite mb-3">
              Acknowledgments
            </h3>
            <p className="font-secondaryRegular text-[24px] text-primWhiteFaint">
              Thank you texts for creators staying Incognito In publishing and
              graphic design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum may be used as a
              placeholder before the final copy is available.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creators;
