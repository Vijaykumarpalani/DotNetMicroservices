import { useCallback } from 'react';
import { useInterestRateConfiguratorStore } from '../stores/zustand/stores/global.store';
import { volvoSelectedSelector } from '../stores/zustand/selectors/selectors';
import { VOLVO_SELECTED_CONFIG_TYPE } from '../types/volvoSelected/config.type';
import { useVolvoSelectedCreateConfig } from '../stores/reactQuery/hooks/volvoSelected.hook';
import { VOLVO_SELECTED_CALC_CONFIG, VOLVO_SELECTED_KEY } from '../consts/volvoSelected.consts';
import { formatDate } from '../utils/_generic.util';

const { CONFIGURATION_NAME, VALID_FROM, DETAIL, CALCULATION_CONFIG_TYPE } = VOLVO_SELECTED_CONFIG_TYPE;

export const useSubmit = () => {
  const updatedRows = useInterestRateConfiguratorStore(volvoSelectedSelector.updatedRows);
  const validFrom = useInterestRateConfiguratorStore(volvoSelectedSelector.validFrom);
  const { mutation } = useVolvoSelectedCreateConfig();
  
  const _submit = useCallback(() => {
    const payload = {
      [CONFIGURATION_NAME]: VOLVO_SELECTED_KEY,
      [CALCULATION_CONFIG_TYPE]: VOLVO_SELECTED_CALC_CONFIG,
      [VALID_FROM]: formatDate(validFrom),
      [DETAIL]: updatedRows
    };
    
    mutation.mutate(payload);
  }, [updatedRows, CONFIGURATION_NAME, VALID_FROM, validFrom, DETAIL, mutation]);
  
  return {
    submit: _submit,
    isLoading: mutation.isPending
  };
};