import { useStage } from "@/zustand/stageStore";
import clsx from "clsx";
import { NavLink, useParams } from "react-router-dom";

const ProgressBar = () => {
  const { step } = useParams();
  const steps = ["contribution", "details", "shipment", "payment"];
  const progressWidth = ["-", "1/3", "2/3", "full"];
  const stage = steps.indexOf(step || "contribution");
  const allowedStage = useStage((state) => state.allowedStage);
  return (
    <section className="flex justify-center bg-primBeige sm:hidden">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS relative pt-bookPT flex justify-center flex-col">
        <div className="w-full h-2 bg-pinkBar relative "></div>
        <div
          className={clsx(
            " h-2 bg-bgPurple absolute rounded-full",
            step && `w-${progressWidth[stage]}`
          )}
        ></div>
        <ul className="text-[24px] font-secondaryBold  absolute w-full flex justify-between">
          <li className="relative">
            <NavLink
              className={clsx(
                "  bg-primPurple border-primPurple  text-primWhite flex justify-center items-center w-16 h-16 rounded-full border-3 xl:w-[45px] xl:h-[45px] lg:h-[32px] lg:w-[32px] smd:w-[32px] smd:h-[32px] ",
                stage < 1 && "pointer-events-none"
              )}
              to={"contribution"}
            >
              <p className="xl:text-[18px] lg:text-[14px] smd:text-[14px]">1</p>
            </NavLink>
            <p
              className="absolute w-max -left-[80%] mt-4 text-bgPurple
            xl:text-copyS
            lg:text-copyS
            smd:w-[120px]
            md:text-[14px] md:-left-[50%] 
            sm:text-[12px] "
            >
              Your Donation Cart
            </p>
          </li>
          <li className="relative">
            <NavLink
              className={clsx(
                "flex justify-center items-center w-16 h-16 rounded-full border-3 xl:w-[45px] xl:h-[45px] xl:text-[18px] lg:h-[32px] lg:w-[32px] smd:w-[32px] smd:h-[32px] lg:text-[14px] smd:text-[14px]",
                stage > 0
                  ? "bg-primPurple border-primPurple  text-primWhite"
                  : "text-bgPurple border-primPurple bg-primWhite",
                allowedStage < 2 && "pointer-events-none"
              )}
              to={"details"}
            >
              2
            </NavLink>
            <p
              className={clsx(
                "absolute w-max -left-1/2 mt-4  xl:text-copyS xl:-left-1/4 lg:text-copyS lg:-left-1/4 smd:w-[70px] md:text-[14px] md:-left-[10%] sm:text-[12px]",
                stage > 0 ? "text-bgPurple" : "text-barGrey"
              )}
            >
              Your details
            </p>
          </li>
          <li className="relative">
            <NavLink
              className={clsx(
                "flex justify-center items-center w-16 h-16 rounded-full border-3 xl:w-[45px] xl:h-[45px] xl:text-[18px] lg:h-[32px] lg:w-[32px] smd:w-[32px] smd:h-[32px] lg:text-[14px] smd:text-[14px]",
                stage > 1
                  ? "bg-primPurple border-primPurple  text-primWhite"
                  : "text-bgPurple border-primPurple bg-primWhite",
                allowedStage < 3 && "pointer-events-none"
              )}
              to={"shipment"}
            >
              3
            </NavLink>
            <p
              className={clsx(
                "absolute w-max -left-1/3 mt-4 xl:text-copyS xl:-left-1/4 lg:text-copyS lg:-left-1/4 md:text-[14px] md:-left-[0%] sm:text-[12px] ",
                stage > 1 ? "text-bgPurple" : "text-barGrey"
              )}
            >
              Shipment
            </p>
          </li>
          <li className="relative">
            <NavLink
              className={clsx(
                "flex justify-center items-center w-16 h-16 rounded-full border-3 xl:w-[45px] xl:h-[45px] xl:text-[18px] lg:h-[32px] lg:w-[32px] smd:w-[32px] smd:h-[32px] lg:text-[14px] smd:text-[14px]",
                stage > 2
                  ? "bg-primPurple border-primPurple  text-primWhite"
                  : "text-bgPurple border-primPurple bg-primWhite",
                allowedStage < 4 && "pointer-events-none"
              )}
              to={"payment"}
            >
              4
            </NavLink>
            <p
              className={clsx(
                "absolute w-max -left-1/2 mt-4 xl:text-copyS xl:-left-[130%] lg:text-copyS lg:-left-[200%] smd:w-[90px] md:text-[14px] md:-left-[0%] sm:text-[12px]",
                stage > 2 ? "text-bgPurple" : "text-barGrey"
              )}
            >
              Complete Donation
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProgressBar;
