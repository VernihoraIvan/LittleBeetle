import clsx from "clsx";
import { useState } from "react";
import { FormikProps } from "formik";
import FormReadress from "./FormReadress";
import { ShipmentDetails, useShipment } from "@/zustand/shipmentStore";
import { useMainStore } from "@/zustand/mainOrderStore";

export interface ShipmentElProps {
  title: string;
  imgPath?: string[];
  id: string;
  shipment?: ShipmentDetails;
  onSubmitRef: (id: string, instance: FormikProps<ShipmentDetails> | null) => void;
}

const sameAddress = (a: ShipmentDetails, b: ShipmentDetails) =>
  (
    [
      "first_name",
      "last_name",
      "country",
      "street_adress",
      "city",
      "postal_code",
    ] as const
  ).every((key) => (a[key] || "") === (b[key] || ""));

const ShipmentEl = ({
  title,
  imgPath,
  id,
  shipment,
  onSubmitRef,
}: ShipmentElProps) => {
  const mainAddress = useShipment((state) => state.shipment);
  const [isMyAdress, setIsMyAdress] = useState(
    () => !shipment || sameAddress(shipment, mainAddress)
  );
  const addShipment = useMainStore((state) => state.addShipment);

  const useMyAddress = () => {
    setIsMyAdress(true);
    // drop any alternative address entered earlier
    addShipment(mainAddress, id);
  };

  const options = [
    { label: "Use my address", active: isMyAdress, onClick: useMyAddress },
    {
      label: "Use a different address",
      active: !isMyAdress,
      onClick: () => setIsMyAdress(false),
    },
  ];

  return (
    <li className="card p-4 md:p-6">
      <div className="flex items-center gap-4">
        {imgPath && (
          <img
            className="h-16 w-16 shrink-0 rounded-xl object-cover md:h-20 md:w-24"
            src={imgPath[0]}
            alt=""
          />
        )}
        <div className="min-w-0">
          <h3 className="heading-3">{title}</h3>
          {isMyAdress && shipment?.street_adress && (
            <p className="caption truncate text-primPurple/60">
              To {shipment.street_adress}, {shipment.city},{" "}
              {shipment.country}
            </p>
          )}
        </div>
      </div>
      <div
        className="mt-4 grid grid-cols-2 gap-1 rounded-xl bg-primPurple/[0.06] p-1"
        role="group"
        aria-label={`Delivery address for ${title}`}
      >
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            aria-pressed={option.active}
            onClick={option.onClick}
            className={clsx(
              "min-h-[44px] rounded-lg px-2 font-secondarySBold text-sm transition-[background-color,color,box-shadow] duration-200 md:text-[15px]",
              option.active
                ? "bg-primWhite text-primPurple shadow-card"
                : "text-primPurple/60 hover:text-primPurple"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
      {!isMyAdress && (
        <FormReadress
          id={id}
          initialValues={
            shipment && !sameAddress(shipment, mainAddress)
              ? shipment
              : mainAddress
          }
          onSubmitRef={(instance) => onSubmitRef(id, instance)}
        />
      )}
    </li>
  );
};

export default ShipmentEl;
