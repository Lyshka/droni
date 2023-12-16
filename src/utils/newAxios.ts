import axios from "axios";

export const newAxios = axios.create({
  baseURL: "https://skupka-dronov.ru",
});
