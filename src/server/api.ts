import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.200.55:3333",
});
