import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

// export const api = axios.create({
//   baseURL: "https://contacts-api-7vp4.onrender.com",
// });
