import { useInterestRateConfiguratorStore } from '../stores/zustand/stores/global.store';
import { volvoSelectedSelector } from '../stores/zustand/selectors/selectors';
import { useMemo } from 'react';

export const useVolvoSelectedRowsWithErrors = () => {
  const updatedRows = useInterestRateConfiguratorStore(volvoSelectedSelector.updatedRows);
  
  const rowsWithErrors = useMemo(() => {
    return updatedRows.filter(row => row.error);
  }, [updatedRows]);
  
  
  return { rowsWithErrors };
};