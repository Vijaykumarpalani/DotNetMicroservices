import { useMemo } from 'react';

export const useRowsWithErrors = (data) => {
  
  // Placing in selectors causes unneeded re-renders
  const rowsWithErrors = useMemo(() => {
    return data?.filter(row => row.error);
  }, [data]);
  
  return { rowsWithErrors };
  
};