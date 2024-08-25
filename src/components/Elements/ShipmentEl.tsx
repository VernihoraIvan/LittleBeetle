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
    <div>
      <div className="mt-8">
        {imgPath && (
          <img
            className="h-purchImgH mr-12 w-imgSW"
            src={imgPath[0]}
            alt="image of a book"
          />
        )}
        <h3 className="text-xl font-secondarySBold mt-2">{title}</h3>
        <div className="w-imgH flex gap-5 mt-9 border border-primPurpleFaintM p-2">
          <button
            onClick={() => setIsMyAdress(true)}
            className={clsx(
              "bg-adrButton py-gapS px-2 w-1/2",
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
              "bg-adrButton py-gapS px-2  w-1/2",
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
