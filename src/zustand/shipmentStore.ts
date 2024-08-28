import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ShipmentDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  streetAdress: string;
  streetAdress2: string;
  city: string;
  postalCode: string;
  id: string;
}

interface Fee {
  price: number;
  quantity: number;
  id: string;
}

export interface ShipmentState {
  shipment: ShipmentDetails;
  submitForm: (shipment: ShipmentDetails, id: string) => void;
  submitFormAll: (shipment: ShipmentDetails) => void;
  fee: Fee[];
  setFee: (id: string, price: number, quantity: number) => void;
  removeFee: (id: string) => void;
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
        id: "",
      },
      fee: [],
      submitForm: (shipment: ShipmentDetails) => {
        set({ shipment });
      },
      setFee: (id: string, price: number, quantity: number) => {
        set((state: ShipmentState) => ({
          fee: [...state.fee, { id, price, quantity }],
        }));
      },
      removeFee: (id: string) => {
        set(({ fee }) => ({
          fee: fee.filter((item) => item.id !== id),
        }));
      },
      submitFormAll: (shipment: ShipmentDetails) => {
        set({ shipment });
      },
    }),
    {
      name: "shipment-storage",
      getStorage: () => localStorage,
    }
  )
);
