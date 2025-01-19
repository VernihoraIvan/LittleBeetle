// import { PersonalData } from "@/utilities/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ShipmentDetails } from "./shipmentStore";

export interface DonationState {
  items: {
    product_name: string;
    quantity: number;
    price: number;
    product_language: string;
    isAGift: boolean;
    id: string;
    shipment: ShipmentDetails;
  }[];
  addDonation: (
    product_name: string,
    quantity: number,
    price: number,
    product_language: string,
    isAGift: boolean,
    id: string
  ) => void;
  removeDonation: (id: string) => void;
  increaseQuantity: (id: string) => void;
  reduceQuantity: (id: string) => void;
  chooseItemLanguage: (product_language: string) => void;
  getQuantity: (id: string) => number;
  setAGift: (id: string, checked: boolean) => void;
  addAdress: (shipment: ShipmentDetails) => void;
  setDefaultAdress: (shipment: ShipmentDetails) => void;
  resetShipments: () => void;
}

export const useDonation = create(
  persist<DonationState>(
    (set, get) => ({
      items: [],
      setDefaultAdress: (shipment: ShipmentDetails) => {
        set((state: DonationState) => ({
          items: state.items.map((item) => ({ ...item, shipment: shipment })),
        }));
      },
      resetShipments: () => {
        set((state: DonationState) => ({
          items: state.items.map((item) => ({
            ...item,
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
              delivery_fee: 0,
              duration: 0,
            },
          })),
        }));
      },
      addDonation: (
        product_name: string,
        quantity: number,
        price: number,
        product_language: string,
        isAGift: boolean,
        id: string
      ) => {
        set((state: DonationState) => ({
          items: state.items.some(
            (item) => item.product_name === product_name && item.price === price
          )
            ? state.items.map((item) =>
                item.product_name === product_name && item.price === price
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            : [
                ...state.items,
                {
                  product_name,
                  quantity,
                  price,
                  product_language,
                  id,
                  isAGift,
                  shipment: {
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    delivery_fee: 0,
                    duration: 0,
                  },
                },
              ],
        }));
      },
      removeDonation: (id: string) => {
        set((state: DonationState) => ({
          items: state.items.filter((item) => !(item.id === id)),
        }));
      },
      increaseQuantity: (id: string) => {
        set((state: DonationState) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },
      reduceQuantity: (id: string) => {
        set((state: DonationState) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        }));
      },
      chooseItemLanguage: (product_language: string) => {
        set((state: DonationState) => ({
          items: state.items.map((item) => ({
            ...item,
            product_language,
          })),
        }));
      },
      getQuantity: (id: string) => {
        const state = get();
        const item = state.items.find((item) => item.id === id);
        return item ? item.quantity : 0;
      },
      setAGift: (id: string, checked: boolean) => {
        set((state: DonationState) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, isAGift: checked } : item
          ),
        }));
      },
      addAdress: (shipment: ShipmentDetails) => {
        console.log("setting shipment shipment: ", shipment);
        set((state: DonationState) => ({
          items: state.items.map((item) => ({ ...item, shipment: shipment })),
        }));
      },
    }),
    {
      name: "donation-storage",
      getStorage: () => localStorage,
    }
  )
);
