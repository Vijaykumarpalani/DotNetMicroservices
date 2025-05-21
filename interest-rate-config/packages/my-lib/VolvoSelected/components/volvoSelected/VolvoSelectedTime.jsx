import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { StyledFlex } from 'vfs-data-portal-components';
import { StyledVolvoSelectedTime } from './style';
import { RegularText } from '../../../mainApp/components/_common/style';
import { getDateWithTimeFromString } from '../../utils/_generic.util';
import { useInterestRateConfiguratorStore } from '../../stores/zustand/stores/global.store';
import { volvoSelectedSelector } from '../../stores/zustand/selectors/selectors';
import { Icon } from '../../../mainApp/components/_common/icons/GenericIcon';

export const VolvoSelectedTime = memo(() => {
  const latestValidFrom = useInterestRateConfiguratorStore(volvoSelectedSelector.latestValidFrom);
  
  if (!latestValidFrom) {
    return null;
  }
  
  return (
    <StyledVolvoSelectedTime>
      <StyledFlex gap="1rem" align="flex-end">
        <Icon label="schedule" size="5rem"/>
        <Box>
          <Typography fontWeight={600} color="#000">Latest configuration</Typography>
          <RegularText color="#000">{getDateWithTimeFromString(latestValidFrom)}</RegularText>
        </Box>
      </StyledFlex>
    </StyledVolvoSelectedTime>
  );
});