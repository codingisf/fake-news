import axios from "axios";

const API_BASE_URL = "https://fake-news-backend-lb9t.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const predictNews = async (text) => {
  try {
    const response = await api.post("/predict", { text });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export const trainModel = async () => {
  try {
    const response = await api.post("/train");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export default api;
