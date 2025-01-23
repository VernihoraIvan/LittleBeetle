import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ShipmentDetails } from "./shipmentStore";

export interface itemProps {
  product_name: string;
  quantity: number;
  price: number;
  product_language: string;
  isAGift: boolean;
  id: string;
  weight: number;
  shipment: ShipmentDetails;
}

export interface ItemArrayProps {
  items: itemProps[];
}

export interface CartState {
  items: itemProps[];
  shipment?: ShipmentDetails;
  setDefaultAdress: (shipment: ShipmentDetails) => void;
  addToCart: (
    product_name: string,
    quantity: number,
    price: number,
    product_language: string,
    isAGift: boolean,
    id: string,
    weight: number
  ) => void;
  removeFromCart: (id: string) => void;
  adjustCart: (id: string, quantity: number, price: number) => void;
  increaseQuantity: (id: string) => void;
  reduceQuantity: (id: string) => void;
  chooseItemLanguage: (product_language: string) => void;
  getQuantity: (id: string) => number;
  setAGift: (id: string, checked: boolean) => void;
  addShipment: (shipment: ShipmentDetails, id: string) => void;
  setShipmentDeliveryFee: (
    id: string,
    deliveryFee: number,
    duration: number
  ) => void;
}

export interface LanguageState {
  language: string;
  changeLanguage: (language: string) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: "English",
  changeLanguage: (language: string) => {
    set({ language });
  },
}));

export const useCart = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addToCart: (
        product_name: string,
        quantity: number,
        price: number,
        product_language: string,
        isAGift: boolean,
        id: string,
        weight: number
      ) => {
        set((state: CartState) => ({
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
                  weight,
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
                  },
                },
              ],
        }));
      },
      setDefaultAdress: (shipment: ShipmentDetails) => {
        set((state: CartState) => ({
          items: state.items.map((item) => ({ ...item, shipment: shipment })),
        }));
      },
      addShipment: (shipment: ShipmentDetails, id: string) => {
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, shipment: shipment } : item
          ),
        }));
      },
      setShipmentDeliveryFee: (
        id: string,
        deliveryFee: number,
        duration: number
      ) => {
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.id === id && item.shipment
              ? {
                  ...item,
                  shipment: {
                    ...item.shipment,
                    default_delivery_fee: deliveryFee,
                    duration: duration,
                  },
                }
              : item
          ),
        }));
      },
      removeFromCart: (id: string) => {
        set((state: CartState) => ({
          items: state.items.filter((item) => !(item.id === id)),
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
      chooseItemLanguage: (product_language: string) => {
        set((state: CartState) => ({
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
