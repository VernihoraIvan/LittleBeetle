import Description from "../components/Description";
import Goal from "../components/Goal";

const About = () => {
  return (
    <>
      <section className="flex justify-center pt-headerPad object-fit bg-cover bg-about-bg bg-custom-50-150 bg-no-repeat w-screen h-screen h-secH">
        <Description />
      </section>
      <section>
        <div className="bg-gradient-to-b from-primPurple to-primPurple h-secH">
          <div className="flex justify-center items-center mix-blend-luminosity bg-cover object-fit  bg-about-bg2 bg-no-repeat w-full h-full ">
            <div className="xxl:w-contW ">
              <Goal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
