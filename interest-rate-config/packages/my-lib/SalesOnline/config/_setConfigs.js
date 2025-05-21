import { setEnv } from '../consts/_common/global.consts';
import { setClient } from './axios';

export const _setConfigs = (state) => {
  const { environment } = state;
  setClient(environment);
  setEnv(environment);
};