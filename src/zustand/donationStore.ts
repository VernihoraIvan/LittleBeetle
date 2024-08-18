import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface DonationState {
  items: {
    name: string;
    quantity: number;
    price: number;
    itemLanguage: string;
    isAGift: boolean;
    id: string;
  }[];
  addDonation: (
    name: string,
    quantity: number,
    price: number,
    itemLanguage: string,
    isAGift: boolean,
    id: string
  ) => void;
  removeDonation: (id: string) => void;
  increaseQuantity: (id: string) => void;
  reduceQuantity: (id: string) => void;
  chooseItemLanguage: (itemLanguage: string) => void;
  getQuantity: (id: string) => number;
  setAGift: (id: string, checked: boolean) => void;
}

export const useDonation = create(
  persist<DonationState>(
    (set, get) => ({
      items: [],
      addDonation: (
        name: string,
        quantity: number,
        price: number,
        itemLanguage: string,
        isAGift: boolean,
        id: string
      ) => {
        set((state: DonationState) => ({
          items: state.items.some(
            (item) => item.name === name && item.price === price
          )
            ? state.items.map((item) =>
                item.name === name && item.price === price
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            : [
                ...state.items,
                { name, quantity, price, itemLanguage, id, isAGift },
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
      chooseItemLanguage: (itemLanguage: string) => {
        set((state: DonationState) => ({
          items: state.items.map((item) => ({
            ...item,
            itemLanguage,
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
    }),
    {
      name: "donation-storage",
      getStorage: () => localStorage,
    }
  )
);
