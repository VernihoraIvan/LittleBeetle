import clsx from "clsx";
import { NavLink, useParams } from "react-router-dom";

const ProgressBar = () => {
  const { step } = useParams();
  const steps = ["contribution", "details", "shipment", "payment"];
  const progressWidth = ["-", "1/3", "2/3", "full"];
  const stage = steps.indexOf(step || "contribution");
  return (
    <section className="flex justify-center bg-primBeige ">
      <div className="xxl:w-contW relative pt-bookPT flex justify-center flex-col">
        <div className="w-full h-2 bg-pinkBar relative"></div>
        <div
          className={clsx(
            " h-2 bg-bgPurple absolute",
            step && `w-${progressWidth[stage]}`
          )}
        ></div>
        <ul className="text-2xl font-secondaryBold  absolute w-full flex justify-between">
          <li className="relative">
            <NavLink
              className="  bg-primPurple border-primPurple  text-primWhite flex justify-center items-center w-16 h-16 rounded-full border-3 "
              to={"contribution"}
            >
              <p className="">1</p>
            </NavLink>
            <p className="absolute w-max -left-full mt-4 text-bgPurple">
              Your contribution
            </p>
          </li>
          <li className="relative">
            <NavLink
              className={clsx(
                "flex justify-center items-center w-16 h-16 rounded-full border-3",
                stage > 0
                  ? "bg-primPurple border-primPurple  text-primWhite"
                  : "text-bgPurple border-primPurple bg-primWhite"
              )}
              to={"details"}
            >
              2
            </NavLink>
            <p
              className={clsx(
                "absolute w-max -left-1/2 mt-4 ",
                stage > 0 ? "text-bgPurple" : "text-barGrey"
              )}
            >
              Your details
            </p>
          </li>
          <li className="relative">
            <NavLink
              className={clsx(
                "flex justify-center items-center w-16 h-16 rounded-full border-3",
                stage > 1
                  ? "bg-primPurple border-primPurple  text-primWhite"
                  : "text-bgPurple border-primPurple bg-primWhite"
              )}
              to={"shipment"}
            >
              3
            </NavLink>
            <p
              className={clsx(
                "absolute w-max -left-1/2 mt-4 ",
                stage > 1 ? "text-bgPurple" : "text-barGrey"
              )}
            >
              Shipment
            </p>
          </li>
          <li className="relative">
            <NavLink
              className={clsx(
                "flex justify-center items-center w-16 h-16 rounded-full border-3",
                stage > 2
                  ? "bg-primPurple border-primPurple  text-primWhite"
                  : "text-bgPurple border-primPurple bg-primWhite"
              )}
              to={"payment"}
            >
              4
            </NavLink>
            <p
              className={clsx(
                "absolute w-max -left-1/2 mt-4 ",
                stage > 2 ? "text-bgPurple" : "text-barGrey"
              )}
            >
              Payment
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProgressBar;
