import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queryKeys';
import { getCofConfiguration } from '../../../api/rateConfiguration.api';
import { useRateConfigurationStore } from '../../zustand/stores/global.store';
import { rateConfigurationSelector } from '../../zustand/selectors/selectors';
import { RATE_CONFIGURATION } from '../../../types/rateConfigurations.types';


export const useCofConfiguration = (userHasAccessRole) => {
  const setRateConfiguration = useRateConfigurationStore(rateConfigurationSelector.setRateConfiguration);
  const rateConfiguration = useRateConfigurationStore(rateConfigurationSelector.rateConfiguration);
  
  const { data, isLoading, isFetched } = useQuery({
    queryKey: [QUERY_KEYS.RATE_CONFIGURATION],
    queryFn: async () => {
      const data = await getCofConfiguration();
      setRateConfiguration(data);
      return data;
    },
    enabled: !rateConfiguration?.[RATE_CONFIGURATION.CALCULATION_TYPE] && !!userHasAccessRole
  });
  
  return {
    data,
    isLoading,
    isFetched
  };
};

