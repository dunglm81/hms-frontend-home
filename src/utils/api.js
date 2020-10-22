import axios from "axios";
import authService from "../services/auth.service";
import { BE_URL, LOGIN_URL, REFRESH_TOKEN_URL } from "./constant";


const api_instance = axios.create({
  baseURL: BE_URL
});

api_instance.interceptors.request.use(
  (config) => {
    const token = authService.getAccessToken();
    const isExpire = authService.isExpire();
    const isRefresh = authService.isRefresh();

    if (token && !isExpire) {
      config.headers.authorization = `Bearer ${token}`;
      if (isRefresh && config.url !== REFRESH_TOKEN_URL) {
        authService.getRefreshToken();
      }
    } else if (config.url !== LOGIN_URL) {
      console.log("TVT configUrl = " + config.url);
      // authService.logout();
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api_instance;
