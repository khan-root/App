import axios from "axios";
import { BASE_URL } from "./data/utils/AppConstant/app_uri";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers:{

    }
})