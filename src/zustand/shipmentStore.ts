import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ShipmentDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  streetAdress: string;
  streetAdress2: string;
  city: string;
  postalCode: string;
}

export interface ShipmentState {
  shipment: ShipmentDetails;
  submitForm: (shipment: ShipmentDetails) => void;
}

export const useShipment = create(
  persist<ShipmentState>(
    (set) => ({
      shipment: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        streetAdress: "",
        streetAdress2: "",
        city: "",
        postalCode: "",
      },
      submitForm: (shipment: ShipmentDetails) => {
        set({ shipment });
      },
    }),
    {
      name: "shipment-storage",
      getStorage: () => localStorage,
    }
  )
);
