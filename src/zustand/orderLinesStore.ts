import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface OrderLine {
  address: {
    country: string;
    city: string;
    street: string;
    postal_code: string;
  };
  products: {
    id: string;
    product_name: string;
    quantity: number;
    weight: number;
  }[];
  totalWeight: number;
  totalDeliveryFee?: number;
  deliveryDuration?: number;
}

interface OrderLinesStore {
  orderLines: OrderLine[];
  setOrderLines: (orderLines: OrderLine[]) => void;
  clearOrderLines: () => void;
  removeOrderLines: (productId: string) => void;
}

export const useOrderLines = create<OrderLinesStore>()(
  persist(
    (set) => ({
      orderLines: [],
      setOrderLines: (orderLines) => set({ orderLines }),
      clearOrderLines: () => set({ orderLines: [] }),
      removeOrderLines: (productId) =>
        set((state) => ({
          orderLines: state.orderLines.filter(
            (orderLine) =>
              !orderLine.products.some((product) => product.id === productId)
          ),
        })),
    }),
    {
      name: "orderLines-storage",
      getStorage: () => localStorage,
    }
  )
);
