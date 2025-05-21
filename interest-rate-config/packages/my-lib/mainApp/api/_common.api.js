import { commonClient } from '../config/axios.config';
import LocalStorageUtil from '../utils/localstorage.util';

const env = LocalStorageUtil.getEnvironment();

export const sendEmail = (payload) =>
  commonClient.post('https://vfs-dp-email-function.azurewebsites.net/api/sendEmail', payload);

export const getMSALConfig = (secretName) =>
  commonClient.post(`https://kevyvault-connector-${env}.azurewebsites.net/api/getSecret`, { secretName });