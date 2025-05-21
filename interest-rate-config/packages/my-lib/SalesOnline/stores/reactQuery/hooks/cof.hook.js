import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queryKeys';
import { getCofCurrent, updateCof } from '../../../api/cof.api';
import { useAppStore, useCofStore } from '../../zustand/stores/global.store';
import { appSelector, cofSelector } from '../../zustand/selectors/selectors';
import { combineCofData } from '../../../utils/cof/cof.util';
import { alertMessageFunction } from '../../../../mainApp/utils/asyncWrapper.util';
import { ACCESS_ROLES } from '../../../../mainApp/consts/access.consts';
import { INTERFACE_TYPES } from '../../../../mainApp/consts/app.consts';

const authorizationTypes = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];


export const useLoadCof = () => {
  const setCofData = useCofStore(cofSelector.setCofData);
  const originalTableData = useCofStore(cofSelector.originalTableData);
  
  const { data, isLoading, isFetched, refetch } = useQuery({
    queryKey: [QUERY_KEYS.COF_DATA],
    queryFn: async () => {
      const data = await getCofCurrent();
      const tableData = combineCofData(data);
      setCofData({
        tableData,
        configuration: data
      });
      return data;
    },
    enabled: !originalTableData?.length
  });
  
  return {
    data,
    isLoading,
    isFetched,
    refetch
  };
};

export const useMutateCof = (refetchCallback) => {
  const setAuthorization = useAppStore(appSelector.setAuthorization);
  const setCofData = useCofStore(cofSelector.setCofData);
  
  const mutation = useMutation({
    mutationFn: (payload) => updateCof(payload),
    onSuccess: (data) => {
      if (data) {
        const tableData = combineCofData(data);
        setCofData({
          tableData,
          configuration: data
        });
      }
      alertMessageFunction('COF saved successfully.', 'success');
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