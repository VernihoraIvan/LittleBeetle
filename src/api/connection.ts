import { MyFormValues } from "@/utilities/interfaces";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

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

export const getHi = async () => {
  try {
    const response = await axios.get("/donation");
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
