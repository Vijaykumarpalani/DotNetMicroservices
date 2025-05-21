import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../../../SalesOnline/config/reactQuery.config';
import { QUERY_KEYS } from '../queryKeys';
import { getLatestConfig, saveConfiguration } from '../../../api/volvoSelected.api';
import { useInterestRateConfiguratorStore } from '../../zustand/stores/global.store';
import { volvoSelectedSelector } from '../../zustand/selectors/selectors';
import { ACCESS_ROLE_TYPE_ENUM } from '../../../types/volvoSelected/config.type';
import { alertMessageFunction } from '../../../../mainApp/utils/asyncWrapper.util';

export const useVolvoSelectedGetConfig = () => {
  const setRows = useInterestRateConfiguratorStore(volvoSelectedSelector.setRows);
  const setUnauthorized = useInterestRateConfiguratorStore(volvoSelectedSelector.setUnauthorized);
  const { data, isLoading, isFetched, refetch } = useQuery({
    queryKey: [QUERY_KEYS.VOLVO_SELECTED_LATEST_CONFIG],
    queryFn: async () => {
      const data = await getLatestConfig();
      setRows(data);
      return data;
    },
    retry: (failureCount, error) => {
      // Stop retrying if the status is 403
      if (error.response?.status === 403) {
        setUnauthorized({
          [ACCESS_ROLE_TYPE_ENUM.READ]: error.response.data.message
        });
        console.log(error);
        return false;
      }
      return failureCount < 3; // Retry up to 3 times for other errors
    },
  });
  
  return {
    data,
    isLoading,
    isFetched,
    refetch
  };
};

export const useVolvoSelectedCreateConfig = () => {
  const setUnauthorized = useInterestRateConfiguratorStore(volvoSelectedSelector.setUnauthorized);
  const mutation = useMutation({
    mutationFn: (payload) => saveConfiguration(payload),
    onSuccess: () => {
      alertMessageFunction('Configuration saved successfully', 'success');
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.VOLVO_SELECTED_LATEST_CONFIG],
      });
    },
    onError: error => {
      if (error.response?.status === 403) {
        setUnauthorized({
          [ACCESS_ROLE_TYPE_ENUM.WRITE]: error.response.data.message
        });
        return false;
      }
      const message = error.response?.data?.message ?? 'Configuration saved error';
      alertMessageFunction(message, 'error');
    },
  });
  
  
  return { mutation };
};