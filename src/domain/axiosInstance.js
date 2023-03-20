import axios from "axios";
import { BASE_URL } from "./domain_uri";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers:{

    }
})