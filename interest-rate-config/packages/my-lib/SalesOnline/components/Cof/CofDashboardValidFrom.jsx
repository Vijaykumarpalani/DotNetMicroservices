import React from 'react';
import Box from '@mui/material/Box';
import { BasicDatePicker } from '../../../components/_common/inputs/DatePicker';
import { useCofStore } from '../../stores/zustand/stores/global.store';
import { cofSelector } from '../../stores/zustand/selectors/selectors';

export const CofDashboardValidFrom = () => {
  const validFrom = useCofStore(cofSelector.validFrom);
  const goBackToDate = useCofStore(cofSelector.goBackToDate);
  
  return (
    <Box>
      <BasicDatePicker
        label="Go back to"
        value={validFrom}
        onChange={goBackToDate}
      />
    </Box>
  );
};