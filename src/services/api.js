import axios from "axios";

export const api = axios.create({
  baseURL: "https://contacts-api-7vp4.onrender.com",
});
