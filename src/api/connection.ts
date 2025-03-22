import { MyFormValues } from "@/utilities/interfaces";
import { itemProps } from "@/zustand/productStore";
import axios from "axios";

// const BASE_URL = "http://localhost:3001";
const BASE_URL =
  "https://littlebeetle-backend-nestjs-production.up.railway.app";

axios.defaults.baseURL = BASE_URL;

export const postDonation = async (data: MyFormValues) => {
  try {
    const response = await axios.post("/donation", data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const sentData = async (data: itemProps[]) => {
  const productArray = data.map((item) => ({
    product_name: item.product_name,
    quantity: item.quantity,
    price: item.price,
    product_language: item.product_language,
    isAGift: item.isAGift,
    id: item.id,
    shipment: item.shipment,
  }));
  let response;
  try {
    response = await axios.post("/data", productArray);
  } catch (error) {
    console.error(error);
  }
  return response;
};

export const updateDonation = async (data: MyFormValues) => {
  try {
    const response = await axios.put(`/donation/:${data.id}`, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const proceedToPayment = async (amount: number, currency: string) => {
  try {
    const response = await axios.post("donation", {
      amount: amount * 100,
      currency,
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
export const sendDonationConfirmation = async (
  email: string,
  name: string,
  lang: "en" | "ua"
) => {
  console.log(email, name);
  try {
    const response = await axios.post("/mail/send", { to: email, name, lang });
    return response;
  } catch (error) {
    console.error(error);
  }
};
