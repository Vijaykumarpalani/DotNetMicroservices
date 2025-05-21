import React from 'react';
import Box from '@mui/material/Box';
import { BasicDatePicker } from '../../../mainApp/components/_common/inputs/DatePicker';
import { useInterestRateConfiguratorStore } from '../../stores/zustand/stores/global.store';
import { volvoSelectedSelector } from '../../stores/zustand/selectors/selectors';
import { TODAY } from '../../consts/_globals.consts';

export const VolvoSelectedValidFrom = () => {
  const rowsHaveChanged = useInterestRateConfiguratorStore(volvoSelectedSelector.rowsHaveChanged);
  const validFrom = useInterestRateConfiguratorStore(volvoSelectedSelector.validFrom);
  const setValidFrom = useInterestRateConfiguratorStore(volvoSelectedSelector.setValidFrom);
  
  return (
    <Box>
      <BasicDatePicker
        width="100%"
        label="Valid From"
        disabled={!rowsHaveChanged}
        minDate={TODAY}
        value={validFrom}
        onChange={setValidFrom}
      />
    </Box>
  );
};