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

interface Fee {
  price: number;
  quantity: number;
  id: string;
}

export interface ShipmentState {
  shipment: ShipmentDetails;
  submitForm: (shipment: ShipmentDetails) => void;
  fee: Fee[];
  setFee: (id: string, price: number, quantity: number) => void;
  // setFee: ({ id, price, quantity }: Fee) => void;
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
    }),
    {
      name: "shipment-storage",
      getStorage: () => localStorage,
    }
  )
);
