import { create } from "zustand";

export interface CartState {
  items: {
    name: string;
    quantity: number;
    price: number;
    itemLanguage: string;
  }[];
  addToCart: (
    name: string,
    quantity: number,
    price: number,
    itemLanguage: string
  ) => void;
  removeFromCart: (name: string, price: number) => void;
  adjustCart: (name: string, quantity: number, price: number) => void;
  increaseQuantity: (name: string) => void;
  reduceQuantity: (name: string) => void;
  chooseItemLanguage: (itemLanguage: string) => void;
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

export const useCart = create<CartState>((set) => ({
  items: [],
  addToCart: (
    name: string,
    quantity: number,
    price: number,
    itemLanguage: string
  ) => {
    set((state: CartState) => ({
      items: [...state.items, { name, quantity, price, itemLanguage }],
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
}));
