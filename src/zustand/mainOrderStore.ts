import { create } from "zustand";
import { nanoid } from "nanoid";
import { CartState, useCart } from "./productStore";
import { ShipmentDetails, ShipmentState, useShipment } from "./shipmentStore";

export interface MainStoreState {
  products: CartState["items"];
  shipment: ShipmentState["shipment"];
  orderID: string;
  generateOrderID: () => void;
  addToCart: CartState["addToCart"];
  removeFromCart: CartState["removeFromCart"];
  adjustCart: CartState["adjustCart"];
  increaseQuantity: CartState["increaseQuantity"];
  reduceQuantity: CartState["reduceQuantity"];
  chooseItemLanguage: CartState["chooseItemLanguage"];
  setAGift: CartState["setAGift"];
  submitForm: ShipmentState["submitForm"];
  setFee: ShipmentState["setFee"];
  removeFee: ShipmentState["removeFee"];
  addShippment: CartState["addShipment"];
  setDefaultAdress: CartState["setDefaultAdress"];
  syncStates: () => void;
}

export const useMainStore = create<MainStoreState>((set) => ({
  // Initial states from other stores
  products: useCart.getState().items,
  shipment: useShipment.getState().shipment,
  orderID: "",

  // Generate a new order ID using nanoid
  generateOrderID: () => {
    set({ orderID: nanoid() });
  },

  setDefaultAdress: (shipment: ShipmentDetails) => {
    useCart.getState().setDefaultAdress(shipment);
    set({ products: useCart.getState().items });
  },

  // Pass through Cart methods and update products in the main store
  addToCart: (...args) => {
    useCart.getState().addToCart(...args);
    set({ products: useCart.getState().items });
  },
  addShippment: (shipment: ShipmentDetails, id: string) => {
    useCart.getState().addShipment(shipment, id);
    set({ products: useCart.getState().items });
  },
  //   addShipment: (shipment: ShipmentDetails, id: string) => {
  //     set((state: CartState) => ({
  //       items: state.items.map((item) =>
  //         item.id === id ? { ...item, shippment: shipment } : item
  //       ),
  //     }));
  //   },
  removeFromCart: (...args) => {
    useCart.getState().removeFromCart(...args);
    set({ products: useCart.getState().items });
  },
  adjustCart: (...args) => {
    useCart.getState().adjustCart(...args);
    set({ products: useCart.getState().items });
  },
  increaseQuantity: (...args) => {
    useCart.getState().increaseQuantity(...args);
    set({ products: useCart.getState().items });
  },
  reduceQuantity: (...args) => {
    useCart.getState().reduceQuantity(...args);
    set({ products: useCart.getState().items });
  },
  chooseItemLanguage: (...args) => {
    useCart.getState().chooseItemLanguage(...args);
    set({ products: useCart.getState().items });
  },
  setAGift: (...args) => {
    useCart.getState().setAGift(...args);
    set({ products: useCart.getState().items });
  },

  // Pass through Shipment methods and update shipment in the main store
  submitForm: (...args) => {
    useShipment.getState().submitForm(...args);
    set({ shipment: useShipment.getState().shipment });
  },
  setFee: (...args) => {
    useShipment.getState().setFee(...args);
    set({ shipment: useShipment.getState().shipment });
  },
  removeFee: (...args) => {
    useShipment.getState().removeFee(...args);
    set({ shipment: useShipment.getState().shipment });
  },

  // Sync all states from both stores into the main store
  syncStates: () => {
    set({
      products: useCart.getState().items,
      shipment: useShipment.getState().shipment,
    });
  },
}));
