import React, { memo, useCallback } from 'react';
import Box from '@mui/material/Box';
import { BasicDatePicker } from '../../../components/_common/inputs/DatePicker';
import { useSurchargesStore } from '../../stores/zustand/stores/global.store';
import { surchargesSelector } from '../../stores/zustand/selectors/selectors';

export const SurchargeValidFrom = memo(({ surchargeInView = { surchargeInView } }) => {
  const validFrom = useSurchargesStore(surchargesSelector.surchargesDict)?.[surchargeInView]?.['validFrom'];
  const goBackToDate = useSurchargesStore(surchargesSelector.goBackToDate);
  
  const handleGoBack = useCallback((value) => {
    goBackToDate(value, surchargeInView);
  }, [goBackToDate, surchargeInView]);
  
  return (
    <Box>
      <BasicDatePicker
        label="Go back to"
        value={validFrom}
        onChange={handleGoBack}
      />
    </Box>
  );
});