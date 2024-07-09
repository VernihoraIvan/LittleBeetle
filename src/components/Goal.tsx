import LinkLogo from "../assets/icons/external-link.svg?react";

const Goal = () => {
  return (
    <div className="flex justify-between  xxl:w-contW">
      <div className="  ">
        <div className="mb-10 flex gap-2 justify-center align-center flex-col">
          <h2 className="font-primaryBold text-primWhite  text-titleS">
            Our goal
          </h2>
          <p className="leading-relaxed text-primWhiteFaint w-[1110px] text-2xl font-secondaryRegular">
            100% of donations from this project will be redirected to the Voices
            of Children Charitable Foundation. This organization focuses on
            providing psychological support to children who have suffered from
            hostilities and traumatic events in eastern Ukraine. Their mission
            is that no child should be left alone with the experience of war,
            and we are committed to supporting this cause together.
          </p>
        </div>
        <button className="border border-white py-3.5 px-14 ">
          <div className=" flex gap-2 items-center">
            <p className="text-primWhite text-linkS font-primaryRegular">
              Learn more
            </p>
            <LinkLogo />
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center ">
        <img
          className="h-imgW w-imgW mb-2"
          src="/src/assets/images/voices-logo.png"
          alt="Voices of children logo"
        />
        <p className="text-2xl font-secondarySBold text-primWhite">
          Voices of children
        </p>
      </div>
    </div>
  );
};

export default Goal;
