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

// interface Fee {
//   total: number;
//   shipping: number[];
// }

export interface ShipmentState {
  shipment: ShipmentDetails;
  submitForm: (shipment: ShipmentDetails) => void;
  fee: number[];
  setFee: (fee: number) => void;
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
      fee: [],
      submitForm: (shipment: ShipmentDetails) => {
        set({ shipment });
      },
      setFee: (num: number) => {
        set((state: ShipmentState) => ({
          fee: [...state.fee, num],
        }));
      },
      removeFee: (num: number) => {
        set(({ fee }) => ({
          fee: fee.filter((item) => item !== num),
        }));
      },
    }),
    {
      name: "shipment-storage",
      getStorage: () => localStorage,
    }
  )
);
