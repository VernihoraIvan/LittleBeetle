import CreatorsEl from "@/components/Elements/CreatorsEl";
import TitleNDescription from "@/components/TitleNDescription";
import { creatorsData } from "@/utilities/data";

const Creators = () => {
  return (
    <div className="surface-dark relative bg-primPurple">
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-creators-bg bg-cover bg-center opacity-30 mix-blend-luminosity [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
      <div className="page-container relative pb-20 md:pb-28">
        <TitleNDescription
          title="Creators"
          description="The book and lullaby was crafted by over 15 volunteers from around the world. They donated their talents to create this project, from beautiful illustrations to a soothing melody, to inspire hope and healing."
        />
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
          {creatorsData.map((el) => (
            <CreatorsEl
              key={el.name}
              name={el.name}
              location={el.location}
              description={el.description}
              link={el.link}
            />
          ))}
        </ul>
        <div className="mt-16 max-w-prose md:mt-24">
          <h2 className="heading-2 mb-4 text-primWhite">
            To Our Supporters Behind the Scenes
          </h2>
          <p className="body-lg text-primWhiteFaint">
            We want to express our deepest gratitude to the remarkable
            volunteers whose behind-the-scenes contributions have been vital in
            making this project a reality. We are truly humbled by their
            generosity and the lasting impact they will have on young lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creators;
