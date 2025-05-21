import { client } from '../config/axios';
import { CONFIGURATION_NAME } from '../consts/api/api.consts';

export const getSurchargesList = async () => {
  const { data } = await client.get(`surcharges/configurations/${CONFIGURATION_NAME}/calculation-type/COF`);
  return data;
};

export const getSurcharge = async (surchargeName) => {
  const { data } = await client.get(`surcharges/configurations/${CONFIGURATION_NAME}/surcharge/${surchargeName}`);
  return data;
};

export const updateSurcharge = async (surchargeName, payload) => {
  const { data } = await client.put(`surcharges/configurations/${CONFIGURATION_NAME}/surcharge/${surchargeName}`, payload);
  return data;
};
