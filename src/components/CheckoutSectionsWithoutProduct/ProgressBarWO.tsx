import { useStage } from "@/zustand/stageStore";
import clsx from "clsx";
import { NavLink, useParams } from "react-router-dom";

const ProgressBarWO = () => {
  const { step } = useParams();
  const steps = ["contribution", "details", "payment"];
  const progressWidth = ["-", "1/2", "full"];
  const stage = steps.indexOf(step || "contribution");
  const allowedStage = useStage((state) => state.allowedStage);

  return (
    <section className="flex justify-center bg-primBeige sm:hidden">
      <div className="xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-[650px] sm:w-contWSM xs:w-[360px]  xxs:w-contWXSS relative pt-bookPT flex justify-center flex-col">
        <div className="w-full h-2 bg-pinkBar relative"></div>
        <div
          className={clsx(
            " h-2 bg-bgPurple absolute  rounded-full",
            step && `w-${progressWidth[stage]}`
          )}
        ></div>
        <ul className="text-[24px] font-secondaryBold  absolute w-full flex justify-between">
          <li className="relative">
            <NavLink
              className={clsx(
                "  bg-primPurple border-primPurple  text-primWhite flex justify-center items-center w-16 h-16 rounded-full border-3 xl:w-[45px] xl:h-[45px] lg:h-[32px] lg:w-[32px] smd:w-[32px] smd:h-[32px]",
                stage < 1 && "pointer-events-none"
              )}
              to={"contribution"}
            >
              <p className="xl:text-[18px] lg:text-[14px] smd:text-[14px]">1</p>
            </NavLink>
            <p
              className="absolute w-max -left-full mt-4 text-bgPurple text-center
            xl:text-copyS
            lg:text-copyS lg:w-[120px]
            md:text-[14px] md:w-[125px] 
            sm:text-[12px]"
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
                "absolute w-max -left-1/2 mt-4 xl:text-copyS xl:-left-1/2 lg:w-[90px] lg:text-copyS lg:-left-1/4 md:w-[70px] md:text-[14px] md:-left-[10%] sm:text-[12px]",
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
              to={"payment"}
            >
              3
            </NavLink>
            <p
              className={clsx(
                "absolute w-max right-[-100%] mt-4 xl:text-copyS xl:-right-[135%] lg:w-[90px] lg:text-copyS lg:-left-1/4 md:w-[70px] md:text-[14px] md:-left-[0%] sm:text-[12px]",
                stage > 1 ? "text-bgPurple" : "text-barGrey"
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

export default ProgressBarWO;
