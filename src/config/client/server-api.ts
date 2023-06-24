import axios from "axios";
import { BASE_URL, BASE_LOCAL_URL } from "../constants";

export const Api = axios.create({
  baseURL: BASE_URL,
});

export const ApiLocal = axios.create({
  baseURL: BASE_LOCAL_URL,
});
