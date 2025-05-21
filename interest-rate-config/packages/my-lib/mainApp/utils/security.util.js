import VFSAuth from 'vfs-msal-auth';
import { setCommonApiInterceptors } from '../config/axios.config';

export const loginDataPortal = async () => {
  const res = await VFSAuth.signIn();
  setCommonApiInterceptors();
  return res;
};

export const isInteractionNeeded = (error) => {
  if (!error.message || error.message.length <= 0) {
    return false;
  }
  
  return (
    error.message.indexOf('consent_required') > -1 ||
    error.message.indexOf('interaction_required') > -1 ||
    error.message.indexOf('login_required') > -1 ||
    error.message.indexOf('no_account_in_silent_request') > -1 ||
    error.name.indexOf('InteractionRequiredAuthError') > -1
  );
};