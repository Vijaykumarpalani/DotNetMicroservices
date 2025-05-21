import axios from 'axios';
import { authVolvoSelected } from '../utils/security.util';
import { VOLVO_SELECTED_URL_PATHS } from '../consts/api.consts';
import LocalStorageUtil from '../utils/localstorage.util';

export let volvoSelectedClient;

export const setVolvoSelectedClient = (env) => {
  volvoSelectedClient = axios.create({
    baseURL: VOLVO_SELECTED_URL_PATHS[env]
  });
};

export const setVolvoSelectedAuthInterceptors = () => {
  volvoSelectedClient.interceptors.request.use(async (config) => {
    
    const token = LocalStorageUtil.getIrcToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  volvoSelectedClient.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log('error');
      const originalRequest = error.config;
      if (error.response && error.response.status === 401) {
        const { token } = await authVolvoSelected();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        originalRequest.headers['Authorization'] = 'Bearer ' + token;
        return axios(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};
