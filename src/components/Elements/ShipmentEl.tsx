import clsx from "clsx";
import { useState } from "react";
import FormReadress from "./FormReadress";
import { ShipmentDetails } from "@/zustand/shipmentStore";
import { FormikProps } from "formik";
import { MyFormValues } from "@/utilities/interfaces";

export interface ShipmentElProps {
  title: string;
  imgPath?: string[];
  id: string;
  shipment?: ShipmentDetails;
  onSubmitRef: (instance: FormikProps<MyFormValues>) => void;
}

const ShipmentEl = ({
  title,
  imgPath,
  id,
  shipment,
  onSubmitRef,
}: ShipmentElProps) => {
  const [isMyAdress, setIsMyAdress] = useState(true);
  console.log("shipment", shipment);
  return (
    <div className="smd:w-[310px]">
      <div className="mt-8">
        {imgPath && (
          <img
            className="h-purchImgH mr-12 w-imgSW "
            src={imgPath[0]}
            alt="image of a book"
          />
        )}
        <h3
          className="text-xl font-secondarySBold mt-2
          xl:text-[20px]
          lg:text-[16px]
          md:text-[16px]
          sm:text-[16px]"
        >
          {title}
        </h3>
        <div
          className="w-imgH flex gap-5 mt-9 border border-primPurpleFaintM p-2
        smd:w-full smd:gap-2 smd:p-1"
        >
          <button
            onClick={() => setIsMyAdress(true)}
            className={clsx(
              "bg-adrButton py-gapS px-2 w-1/2 text-[20px] xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[14px] smd:px-1 smd:py-[6px]",
              isMyAdress === true
                ? "bg-adrButton text-primWhite"
                : "bg-primBeige text-primPurple"
            )}
          >
            Use my address
          </button>
          <button
            onClick={() => setIsMyAdress(false)}
            className={clsx(
              "bg-adrButton py-gapS px-2  w-1/2 text-[20px] xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[14px] smd:px-1 smd:py-[6px]",
              isMyAdress === true
                ? "bg-primBeige text-primPurple"
                : "bg-adrButton text-primWhite"
            )}
          >
            Use different address
          </button>
        </div>
      </div>
      {isMyAdress === false && (
        <FormReadress onSubmitRef={onSubmitRef} id={id} />
      )}
    </div>
  );
};

export default ShipmentEl;
