import axios from "axios";
import { API_URL } from "./constants/constants";

const $Y = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

export default $Y