import axios from "axios";
import { axiosConfig } from "../constants/config";

const axiosInstance =  axios.create({
    baseURL: axiosConfig.baseURL,
    headers: axiosConfig.headers,
})

export default axiosInstance;