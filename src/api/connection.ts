import { MyFormValues } from "@/utilities/interfaces";
import { itemProps } from "@/zustand/productStore";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

export const postDonation = async (data: MyFormValues) => {
  try {
    const response = await axios.post("/donation", data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateDonation = async (data: MyFormValues) => {
  try {
    const response = await axios.put(`/donation/:${data.id}`, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// Sends the cart to the backend, which saves it and returns the Stripe Checkout
// URL. The order and confirmation email are created server-side once Stripe
// confirms the payment.
export const proceedToPayment = async (
  items: itemProps[],
  deliveryTotal: number,
  isProduct: boolean
) => {
  try {
    const response = await axios.post("donation", {
      items: items.map((item) => ({
        product_name: item.product_name,
        quantity: item.quantity,
        price: item.price,
        product_language: item.product_language,
        isAGift: item.isAGift,
        shipment: item.shipment,
      })),
      deliveryTotal,
      isProduct,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const verifyStripePayment = async (sessionId: string) => {
  try {
    const response = await axios.get(
      `/donation/verify?session_id=${sessionId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
