import { NavLink, useParams } from "react-router-dom";

const ProgressBar = () => {
  const { step } = useParams();
  console.log(step);
  return (
    <section className="flex justify-center">
      <div className="xxl:w-contW relative pt-bookPT flex justify-center flex-col">
        <div className="w-full h-2 bg-pinkBar relative"></div>
        <div className="w-full h-2 bg-bgPurple absolute"></div>
        <ul className="text-2xl font-secondaryBold  absolute w-full flex justify-between">
          <li className="relative">
            <NavLink
              className=" flex justify-center items-center w-16 h-16 rounded-full border-3 border-primPurple bg-primPurple"
              to={"contribution"}
            >
              <p className="text-primWhite">1</p>
            </NavLink>
            <p className="absolute w-max -left-full mt-4 text-bgPurple">
              Your contribution
            </p>
          </li>
          <li className="relative">
            <NavLink
              className=" text-bgPurple flex justify-center items-center w-16 h-16 rounded-full border-3 border-primPurple bg-primWhite"
              to={"details"}
            >
              2
            </NavLink>
            <p className="absolute w-max -left-1/2 mt-4 text-barGrey">
              Your details
            </p>
          </li>
          <li className="relative">
            <NavLink
              className="text-bgPurple flex justify-center items-center w-16 h-16 rounded-full border-3 border-primPurple bg-primWhite"
              to={"shipment"}
            >
              3
            </NavLink>
            <p className="absolute w-max -left-1/3 mt-4 text-barGrey">
              Shipment
            </p>
          </li>
          <li className="relative">
            <NavLink
              className="text-bgPurple flex justify-center items-center w-16 h-16 rounded-full border-3 border-primPurple bg-primWhite"
              to={"payment"}
            >
              4
            </NavLink>
            <p className="absolute w-max -left-1/4 mt-4 text-barGrey">
              Payment
            </p>
          </li>
        </ul>
      </div>
      {/* <ul className="flex justify-between">
        <li>Your contribution</li>
        <li>Your details</li>
        <li>Shipment</li>
        <li>Payment</li>
      </ul> */}
    </section>
  );
};

export default ProgressBar;
