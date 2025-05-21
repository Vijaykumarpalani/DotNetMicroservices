import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queryKeys';
import { getProformaDetails, getProformaSurchargesList, updateProformaDetails } from '../../../api/proforma.api';
import { useAppStore, useProformaStore } from '../../zustand/stores/global.store';
import { appSelector, proformaSelector } from '../../zustand/selectors/selectors';
import { PROFORMA_LIST, PROFORMA_LIST_ITEM } from '../../../types/proforma.types';
import { getSurcharge, updateSurcharge } from '../../../api/surcharges.api';
import { alertMessageFunction } from '../../../../mainApp/utils/asyncWrapper.util';
import { ACCESS_ROLES } from '../../../../mainApp/consts/access.consts';
import { INTERFACE_TYPES } from '../../../../mainApp/consts/app.consts';

const authorizationTypes = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];


export const useProformaDetails = () => {
  const updatedProformaDetails = useProformaStore(proformaSelector.updatedProformaDetails);
  const setProformaDetails = useProformaStore(proformaSelector.setProformaDetails);
  
  const { data, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEYS.PROFORMA_CONFIG],
    queryFn: async () => {
      const data = await getProformaDetails();
      setProformaDetails(data);
      return data;
    },
    enabled: !updatedProformaDetails
  });
  
  return {
    data,
    isLoading,
    refetch
  };
};

export const useProformaList = () => {
  const setProformaInView = useProformaStore(proformaSelector.setProformaInView);
  const proformaInView = useProformaStore(proformaSelector.proformaInView);
  
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.PROFORMA_LIST],
    queryFn: async () => {
      const data = await getProformaSurchargesList();
      if (data?.[PROFORMA_LIST.SURCHARGES] && !proformaInView) {
        setProformaInView(data[PROFORMA_LIST.SURCHARGES][0]?.[PROFORMA_LIST_ITEM.NAME]);
      }
      return data;
    },
  });
  
  return {
    data,
    isLoading,
  };
};

export const useProforma = (name) => {
  const setProformaObject = useProformaStore(proformaSelector.setProformaObject);
  const proformaDict = useProformaStore(proformaSelector.proformaDict);
  
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.PROFORMA_SURCHARGE, name],
    queryFn: async () => {
      const data = await getSurcharge(name);
      if (!proformaDict[name]) {
        setProformaObject(name, data);
      }
      return data;
    },
    enabled: !proformaDict[name]
  });
  
  return {
    data,
    isLoading,
  };
};

export const useMutateProforma = (surchargeName) => {
  const setAuthorization = useAppStore(appSelector.setAuthorization);
  const setProformaObject = useProformaStore(proformaSelector.setProformaObject);
  
  const mutation = useMutation({
    mutationFn: (payload) => updateSurcharge(surchargeName, payload),
    onSuccess: (data) => {
      if (data) {
        setProformaObject(surchargeName, data);
      }
      alertMessageFunction('Proforma fee saved successfully.', 'success');
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

export const useMutateProformaDetails = (refetchCallback) => {
  const setAuthorization = useAppStore(appSelector.setAuthorization);
  
  const mutation = useMutation({
    mutationFn: (payload) => updateProformaDetails(payload),
    onSuccess: () => {
      alertMessageFunction('Proforma details saved successfully.', 'success');
      refetchCallback?.();
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