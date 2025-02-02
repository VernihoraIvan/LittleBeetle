import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ShipmentDetails {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country?: string;
  street_adress?: string;
  street_adress2?: string;
  city?: string;
  postal_code?: string;
  default_delivery_fee?: number;
  duration?: number;
  delivery_fee?: number;
}

interface Fee {
  price: number;
  quantity: number;
  id: string;
  deliveryFee: number;
  duration: number;
}

export interface ShipmentState {
  shipment: ShipmentDetails;
  submitForm: (shipment: ShipmentDetails, id: string) => void;
  submitFormAll: (shipment: ShipmentDetails) => void;
  fee: Fee[];
  setFee: (id: string, price: number, quantity: number) => void;
  removeFee: (id: string) => void;
  resetShipments: () => void;
  resetShipmentsMain: () => void;
  setDeliveryFee: (id: string, deliveryFee: number, duration: number) => void;
  // setShipmentDeliveryFee: (
  //   id: string,
  //   deliveryFee: number,
  //   duration: number
  // ) => void;
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
        default_delivery_fee: 0,
        duration: 0,
        delivery_fee: 0,
      },
      fee: [],
      resetShipmentsMain: () => {
        set({
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
            default_delivery_fee: 0,
            duration: 0,
            delivery_fee: 0,
          },
        });
      },
      submitForm: (shipment: ShipmentDetails) => {
        set({ shipment });
      },
      setFee: (id: string, price: number, quantity: number) => {
        set((state: ShipmentState) => ({
          fee: [
            ...state.fee,
            { id, price, quantity, deliveryFee: 0, duration: 0 },
          ],
        }));
      },
      setDeliveryFee: (id: string, deliveryFee: number, duration: number) => {
        console.log(id, "id");
        console.log(deliveryFee, "deliveryFee");
        console.log(duration, "duration");
        set((state: ShipmentState) => ({
          fee: state.fee.map((item) =>
            item.id === id ? { ...item, deliveryFee, duration } : item
          ),
        }));
      },
      // setShipmentDeliveryFee: (
      //   id: string,
      //   deliveryFee: number,
      //   duration: number
      // ) => {
      //   set((state: ShipmentState) => ({
      //     shipment: state.shipment.map((item) =>
      //       item.id === id
      //         ? { ...item, default_delivery_fee: deliveryFee, duration: duration }
      //         : item
      //     ),
      //   }));
      // },

      removeFee: (id: string) => {
        set(({ fee }) => ({
          fee: fee.filter((item) => item.id !== id),
        }));
      },
      submitFormAll: (shipment: ShipmentDetails) => {
        set({ shipment });
      },
      resetShipments: () => {
        set({
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
            default_delivery_fee: 0,
            duration: 0,
            delivery_fee: 0,
          },
        });
      },
    }),
    {
      name: "shipment-storage",
      getStorage: () => localStorage,
    }
  )
);
