import { setVolvoSelectedAuthInterceptors, setVolvoSelectedClient } from './axios.volvoSelected';
import { setEnv } from '../consts/_globals.consts';

export const _setConfigs = (state) => {
  const { environment } = state;
  setVolvoSelectedClient(environment);
  setEnv(environment);
  setVolvoSelectedAuthInterceptors(environment);
};