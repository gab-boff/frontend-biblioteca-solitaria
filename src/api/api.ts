import axios, { AxiosInstance } from "axios";

const baseURL = "http://18.231.52.101:8000";
// const baseURL = "http://localhost:8000";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    accept: "application/json",
  },
});

export const getData = async () => {
  try {
    const response = await axiosInstance.get("/dados-projetos", {
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "1096385449351712768-3165192b8c53c612be0bdae62ecbf9d0f968c502b9a03f67c87a62d72214be4c"
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
