import { client } from '../config/axios';
import { CONFIGURATION_NAME } from '../consts/api/api.consts';

export const getCofConfiguration = async () => {
  const { data } = await client.get(`rate-configurations/configurations/${CONFIGURATION_NAME}`);
  return data;
};
