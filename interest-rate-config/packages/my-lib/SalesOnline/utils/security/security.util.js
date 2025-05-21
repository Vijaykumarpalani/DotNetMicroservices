import LocalStorageUtil from '../_common/localstorage.util';
import { SALES_ONLINE_KEY } from '../../consts/security/auth.consts';
import { env } from '../../consts/_common/global.consts';
import Authenticator from './authenticator.util';
import { getMSALConfig } from '../../../mainApp/api/_common.api';
import { asyncWrapper } from '../../../mainApp/utils/asyncWrapper.util';


export const authSalesOnline = async (manualLoginNeeded) => {
  const [data] = await asyncWrapper(getMSALConfig(SALES_ONLINE_KEY));
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
  LocalStorageUtil.setSalesOnlineToken(token);
  return {
    account,
    token,
    headers: msalConfig.headers,
    error
  };
};