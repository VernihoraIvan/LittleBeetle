import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ShipmentDetails {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  street_adress: string;
  street_adress2: string;
  city: string;
  postal_code: string;
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
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        country: "",
        street_adress: "",
        street_adress2: "",
        city: "",
        postal_code: "",
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
