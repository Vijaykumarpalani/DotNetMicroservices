import { volvoSelectedClient } from '../config/axios.volvoSelected';

export const getLatestConfig = async () => {
  const { data } = await volvoSelectedClient.get('/configurations/VolvoSelected');
  return data;
};

export const saveConfiguration = async (payload) => {
  const { data } = await volvoSelectedClient.put('/configurations/VolvoSelected', payload);
  return data;
};