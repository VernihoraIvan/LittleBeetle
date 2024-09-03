import { MyFormValues } from "@/utilities/interfaces";
import axios from "axios";

// const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://little-beetle-backend-d16f76890ac7.herokuapp.com/";
// const BASE_URL = "https://littlebeetle-backend-nestjs.onrender.com";

axios.defaults.baseURL = BASE_URL;

export const postDonation = async (data: MyFormValues) => {
  try {
    const response = await axios.post("/donation", data);
    console.log("inside postDonation");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateDonation = async (data: MyFormValues) => {
  try {
    console.log(data.id);
    const response = await axios.put(`/donation/:${data.id}`, data);
    console.log("inside updateDonation");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const proceedToPayment = async (amount: number, currency: string) => {
  try {
    console.log("amount: ", amount);
    const response = await axios.post("donation", {
      amount: amount * 100,
      currency,
    });

    console.log("inside proceedToPayment");
    return response;
  } catch (error) {
    console.error(error);
  }
};
