import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartState {
  items: {
    name: string;
    quantity: number;
    price: number;
    itemLanguage: string;
    isAGift: boolean;
    id: string;
  }[];
  addToCart: (
    name: string,
    quantity: number,
    price: number,
    itemLanguage: string,
    isAGift: boolean,
    id: string
  ) => void;
  removeFromCart: (name: string, price: number) => void;
  adjustCart: (name: string, quantity: number, price: number) => void;
  increaseQuantity: (name: string) => void;
  reduceQuantity: (name: string) => void;
  chooseItemLanguage: (itemLanguage: string) => void;
  getQuantity: (name: string) => number;
  setAGift: (id: string, checked: boolean) => void;
}

export interface LanguageState {
  language: string;
  changeLanguage: (language: string) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: "en",
  changeLanguage: (language: string) => {
    set({ language });
  },
}));

export const useCart = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addToCart: (
        name: string,
        quantity: number,
        price: number,
        itemLanguage: string,
        isAGift: boolean,
        id: string
      ) => {
        set((state: CartState) => ({
          items: [
            ...state.items,
            { name, quantity, price, itemLanguage, id, isAGift },
          ],
        }));
      },
      removeFromCart: (name: string, price: number) => {
        set((state: CartState) => ({
          items: state.items.filter(
            (item) => !(item.name === name && item.price === price)
          ),
        }));
      },
      increaseQuantity: (name: string) => {
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.name === name ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },
      reduceQuantity: (name: string) => {
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.name === name ? { ...item, quantity: item.quantity - 1 } : item
          ),
        }));
      },
      adjustCart: (name: string, quantity: number, price: number) => {
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.name === name ? { ...item, quantity, price } : item
          ),
        }));
      },
      chooseItemLanguage: (itemLanguage: string) => {
        set((state: CartState) => ({
          items: state.items.map((item) => ({
            ...item,
            itemLanguage,
          })),
        }));
      },
      getQuantity: (name: string) => {
        const state = get();
        const item = state.items.find((item) => item.name === name);
        return item ? item.quantity : 0;
      },
      setAGift: (id: string, checked: boolean) => {
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, isAGift: checked } : item
          ),
        }));
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);
