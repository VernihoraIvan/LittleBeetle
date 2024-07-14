import { create } from "zustand";

export interface CartState {
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  addToCart: (name: string, quantity: number, price: number) => void;
  removeFromCart: (name: string, price: number) => void;
  adjustCart: (name: string, quantity: number, price: number) => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  addToCart: (name: string, quantity: number, price: number) => {
    set((state: CartState) => ({
      items: [...state.items, { name, quantity, price }],
    }));
  },
  removeFromCart: (name: string, price: number) => {
    set((state: CartState) => ({
      items: state.items.filter(
        (item) => !(item.name === name && item.price === price)
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
}));
