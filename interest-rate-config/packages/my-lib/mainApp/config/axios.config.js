import axios from 'axios';
import LocalStorageUtil from '../utils/localstorage.util';
import { loginDataPortal } from '../utils/security.util';

export const commonClient = axios.create();

export const setCommonApiInterceptors = () => {
  commonClient.interceptors.request.use(async (config) => {
    
    const token = LocalStorageUtil.getIdToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  commonClient.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log('error');
      const originalRequest = error.config;
      if (error.response && error.response.status === 401) {
        const { idToken } = await loginDataPortal();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + idToken;
        originalRequest.headers['Authorization'] = 'Bearer ' + idToken;
        return axios(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};