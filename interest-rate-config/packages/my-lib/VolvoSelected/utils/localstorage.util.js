import { IRC_TOKEN } from '../consts/localstorage.consts';

const LocalStorageUtil = (() => {
  
  const _setIrcToken = (token) => {
    localStorage.setItem(IRC_TOKEN, token);
  };
  
  const _getIrcToken = () => {
    return localStorage.getItem(IRC_TOKEN);
  };
  
  const _clearStorage = () => {
    localStorage.removeItem(IRC_TOKEN);
  };
  
  return {
    setIrcToken: _setIrcToken,
    getIrcToken: _getIrcToken,
    clearStorage: _clearStorage,
  };
})();

export default LocalStorageUtil;
