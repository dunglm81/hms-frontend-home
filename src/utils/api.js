import axios from "axios";

import { BE_URL, LOGIN_URL } from "./constant";
import authService from "../services/auth.service";

const api_instance = axios.create({
  baseURL: BE_URL,
  timeout: 600000,
});

api_instance.interceptors.request.use(
  (config) => {
    const token = authService.getAccessToken();
    const isExpire = authService.isExpire();
    const isRefresh = authService.isRefresh();

    if (token && !isExpire) {
      config.headers.authorization = `Bearer ${token}`;
      if (isRefresh) {
        authService.getRefreshToken();
      }
    } else if (config.url !== LOGIN_URL) {
      authService.logout();
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api_instance;
