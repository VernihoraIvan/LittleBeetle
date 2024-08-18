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
  removeFromCart: (id: string, price: number) => void;
  adjustCart: (id: string, quantity: number, price: number) => void;
  increaseQuantity: (id: string) => void;
  reduceQuantity: (id: string) => void;
  chooseItemLanguage: (itemLanguage: string) => void;
  getQuantity: (id: string) => number;
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
      removeFromCart: (id: string, price: number) => {
        set((state: CartState) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.price === price)
          ),
        }));
      },
      increaseQuantity: (id: string) => {
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },
      reduceQuantity: (id: string) => {
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        }));
      },
      adjustCart: (id: string, quantity: number, price: number) => {
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity, price } : item
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
      getQuantity: (id: string) => {
        const state = get();
        const item = state.items.find((item) => item.id === id);
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
