import Authenticator from './authenticator.util';
import { setVolvoSelectedAuthInterceptors } from '../config/axios.volvoSelected';
import LocalStorageUtil from './localstorage.util';
import { VOLVO_SELECTED } from '../consts/auth.consts';
import { env } from '../consts/_globals.consts';
import { getMSALConfig } from '../../mainApp/api/_common.api';
import { asyncWrapper } from '../../mainApp/utils/asyncWrapper.util';

export const authVolvoSelected = async (manualLoginNeeded) => {
  const [data] = await asyncWrapper(getMSALConfig(VOLVO_SELECTED));
  if (!data) return;
  const msalConfig = JSON.parse(data.value);
  const scope = msalConfig.scopes[env];
  const authenticator = new Authenticator({ msalConfig, scope });
  let account, token, error;
  if (manualLoginNeeded) {
    ({ account, token, error } = await authenticator.loginPopup());
  } else {
    ({ account, token, error } = await authenticator.getAccessToken());
  }
  setVolvoSelectedAuthInterceptors();
  LocalStorageUtil.setIrcToken(token);
  return {
    account,
    token,
    headers: msalConfig.headers,
    error
  };
};


