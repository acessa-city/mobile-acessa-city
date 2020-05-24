import axios from "axios";
import { getToken } from './auth';
import enviroment from '../enviroments/enviroment-dev';

const API = axios.create({
  baseURL: enviroment.apiUrl,
  responseType: 'json',
});

API.interceptors.request.use(async config => {
  
 const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('pegou token');
  }

  return config;
});

export default API;