import axios from "axios"
import { API_URL } from "../config";

import { getAuthToken } from '../services/auth/auth.service';


axios.interceptors.request.use(async (config) => {
  config.baseURL = API_URL;
  const jwtToken = getAuthToken();
  if (jwtToken !== null) {
    config.headers['Authorization'] = `Bearer ${jwtToken}`;
  }
  return config;
});

export default axios;
