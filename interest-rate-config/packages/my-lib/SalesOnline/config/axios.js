import axios from 'axios';
import LocalStorageUtil from '../utils/_common/localstorage.util';
import { authSalesOnline } from '../utils/security/security.util';
import { URL_PATHS } from '../consts/api/api.consts';

export let client;

export const setClient = (env) => {
  client = axios.create({
    baseURL: URL_PATHS[env]
  });
  
  client.interceptors.request.use(async (config) => {
    const token = LocalStorageUtil.getSalesOnlineToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  client.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log('error');
      const originalRequest = error.config;
      if (error.response && error.response.status === 401) {
        const { token } = await authSalesOnline();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        originalRequest.headers['Authorization'] = 'Bearer ' + token;
        return axios(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};
