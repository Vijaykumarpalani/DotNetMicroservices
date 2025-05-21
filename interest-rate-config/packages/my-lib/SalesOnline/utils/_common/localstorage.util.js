import { SALES_ONLINE_TOKEN } from '../../consts/_common/localstorage.consts';

const LocalStorageUtil = (() => {
  
  const _setSalesOnlineToken = (token) => {
    localStorage.setItem(SALES_ONLINE_TOKEN, token);
  };
  
  const _getSalesOnlineToken = () => {
    return localStorage.getItem(SALES_ONLINE_TOKEN);
  };
  
  const _clearStorage = () => {
    localStorage.removeItem(SALES_ONLINE_TOKEN);
  };
  
  return {
    clearStorage: _clearStorage,
    setSalesOnlineToken: _setSalesOnlineToken,
    getSalesOnlineToken: _getSalesOnlineToken,
  };
})();

export default LocalStorageUtil;
