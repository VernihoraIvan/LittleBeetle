import { PersonalData } from "@/utilities/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface DonationState {
  items: {
    product_name: string;
    quantity: number;
    price: number;
    product_language: string;
    isAGift: boolean;
    id: string;
    adress?: PersonalData;
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
  addAdress: (adress: PersonalData) => void;
}

export const useDonation = create(
  persist<DonationState>(
    (set, get) => ({
      items: [],
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
      addAdress: (adress: PersonalData) => {
        set((state: DonationState) => ({
          items: state.items.map((item) =>
            !item.adress ? { ...item, adress } : item
          ),
        }));
      },
    }),
    {
      name: "donation-storage",
      getStorage: () => localStorage,
    }
  )
);
