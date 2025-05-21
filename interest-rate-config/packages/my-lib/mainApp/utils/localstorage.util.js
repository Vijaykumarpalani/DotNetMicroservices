import { ACCESS_TOKEN, ACCOUNT, ENV, ID_TOKEN } from '../consts/localstorage.consts';

const LocalStorageUtil = (() => {
  const _setAccessToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN, token);
  };
  
  const _setIdToken = (token) => {
    localStorage.setItem(ID_TOKEN, token);
  };
  
  const _getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
  };
  
  const _getIdToken = () => {
    return localStorage.getItem(ID_TOKEN);
  };
  
  const _removeAccessToken = () => {
    return localStorage.removeItem(ACCESS_TOKEN);
  };
  
  const _removeIdToken = () => {
    return localStorage.removeItem(ID_TOKEN);
  };
  
  const _setAccount = (account) => {
    localStorage.setItem(ACCOUNT, JSON.stringify(account));
  };
  
  const _getAccount = () => {
    const accountString = localStorage.getItem(ACCOUNT);
    return accountString ? JSON.parse(accountString) : null;
  };
  
  const _setEnvironment = (env) => {
    localStorage.setItem(ENV, env);
  };
  
  const _getEnvironment = () => {
    return localStorage.getItem(ENV);
  };
  
  const _clearStorage = () => {
    localStorage.removeItem(ENV);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(ID_TOKEN);
    localStorage.removeItem(ACCOUNT);
  };
  
  return {
    setAccessToken: _setAccessToken,
    setIdToken: _setIdToken,
    getAccessToken: _getAccessToken,
    getIdToken: _getIdToken,
    removeIdToken: _removeIdToken,
    removeAccessToken: _removeAccessToken,
    setAccount: _setAccount,
    getAccount: _getAccount,
    setEnvironment: _setEnvironment,
    getEnvironment: _getEnvironment,
    clearStorage: _clearStorage,
  };
})();

export default LocalStorageUtil;
