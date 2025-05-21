import { client } from '../config/axios';
import { CONFIGURATION_NAME } from '../consts/api/api.consts';

export const getProformaDetails = async () => {
  const { data } = await client.get(`/proforma/configurations/${CONFIGURATION_NAME}`);
  return data;
};


export const getProformaSurchargesList = async () => {
  const { data } = await client.get(`surcharges/configurations/${CONFIGURATION_NAME}/calculation-type/Proforma`);
  return data;
};

export const updateProformaDetails = async (payload) => {
  const { data } = await client.put(`/proforma/configurations/${CONFIGURATION_NAME}`, payload);
  return data;
};
