import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queryKeys';
import { getSurcharge, getSurchargesList, updateSurcharge } from '../../../api/surcharges.api';
import { useAppStore, useSurchargesStore } from '../../zustand/stores/global.store';
import { appSelector, surchargesSelector } from '../../zustand/selectors/selectors';
import { SURCHARGES_LIST, SURCHARGES_LIST_ITEM } from '../../../types/surcharges.types';
import { alertMessageFunction } from '../../../../mainApp/utils/asyncWrapper.util';
import { ACCESS_ROLES } from '../../../../mainApp/consts/access.consts';
import { INTERFACE_TYPES } from '../../../../mainApp/consts/app.consts';

const authorizationTypes = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];


export const useSurchargesList = () => {
  const setSurchargeInView = useSurchargesStore(surchargesSelector.setSurchargeInView);
  const surchargeInView = useSurchargesStore(surchargesSelector.surchargeInView);
  
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.SURCHARGES_LIST],
    queryFn: async () => {
      const data = await getSurchargesList();
      if (data?.[SURCHARGES_LIST.SURCHARGE_CONFIGURATION] && !surchargeInView) {
        setSurchargeInView(data[SURCHARGES_LIST.SURCHARGE_CONFIGURATION][0]?.[SURCHARGES_LIST_ITEM.NAME]);
      }
      return data;
    },
  });
  
  return {
    data,
    isLoading,
  };
};

export const useSurcharge = (surchargeName) => {
  const setSurcharge = useSurchargesStore(surchargesSelector.setSurcharge);
  const surchargesDict = useSurchargesStore(surchargesSelector.surchargesDict);
  
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.SURCHARGE, surchargeName],
    queryFn: async () => {
      const data = await getSurcharge(surchargeName);
      if (!surchargesDict[surchargeName]) {
        setSurcharge(surchargeName, data);
      }
      return data;
    },
    enabled: !surchargesDict[surchargeName]
  });
  
  return {
    data,
    isLoading,
  };
};

export const useMutateSurcharge = (surchargeName) => {
  const setAuthorization = useAppStore(appSelector.setAuthorization);
  const setSurcharge = useSurchargesStore(surchargesSelector.setSurcharge);
  
  const mutation = useMutation({
    mutationFn: (payload) => updateSurcharge(surchargeName, payload),
    onSuccess: (data) => {
      if (data) {
        setSurcharge(surchargeName, data);
      }
      alertMessageFunction('Surcharge saved successfully.', 'success');
    },
    onError: error => {
      if (error.status === 403) {
        setAuthorization({
          type: authorizationTypes.WRITE,
          value: false
        });
      }
      const message = error.response?.data?.message ?? 'Configuration save error';
      alertMessageFunction(message, 'error');
    }
  });
  
  return mutation;
};