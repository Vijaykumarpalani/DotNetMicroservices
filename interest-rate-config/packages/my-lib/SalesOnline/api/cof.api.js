import { client } from '../config/axios';
import { CONFIGURATION_NAME } from '../consts/api/api.consts';

export const updateCof = async (payload) => {
  const { data } = await client.put(`cost-of-funds/configurations/${CONFIGURATION_NAME}`, payload);
  return data;
};

export const getCofCurrent = async () => {
  const { data } = await client.get(`cost-of-funds/configurations/${CONFIGURATION_NAME}/current`);
  return data;
};
