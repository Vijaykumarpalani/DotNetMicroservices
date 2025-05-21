import React, { memo } from 'react';
import Box from '@mui/material/Box';
import { StyledSurchargesDashboard } from './style';
import { StyledGroup, StyledLabel, StyledValue } from '../../../mainApp/components/_common/style';
import { useSurchargesStore } from '../../stores/zustand/stores/global.store';
import { surchargesSelector } from '../../stores/zustand/selectors/selectors';
import { formatDateTimeForDisplay } from '../../utils/_common/date.util';
import { SURCHARGE } from '../../types/surcharges.types';
import { SurchargesSubmit } from './SurchargesSubmit';

export const SurchargeViewDashboard = memo(({ surchargeInView, isMinimal, rowsWithErrors }) => {
  const details = useSurchargesStore(surchargesSelector.surchargesDict)[surchargeInView]?.raw;
  
  return (
    <StyledSurchargesDashboard isminimal={isMinimal?.toString()}>
      <Box>
        <StyledGroup>
          <StyledLabel>
            valid from
          </StyledLabel>
          <StyledValue>
            {formatDateTimeForDisplay(details?.[SURCHARGE.VALID_FROM])}
          </StyledValue>
        </StyledGroup>
        <StyledGroup>
          <StyledLabel>
            updated date
          </StyledLabel>
          <StyledValue>
            {formatDateTimeForDisplay(details?.[SURCHARGE.UPDATED_DATE])}
          </StyledValue>
        </StyledGroup>
        <StyledGroup>
          <StyledLabel>
            Created by
          </StyledLabel>
          <StyledValue>
            {details?.[SURCHARGE.USERNAME]}
          </StyledValue>
        </StyledGroup>
      </Box>
      <SurchargesSubmit
        surchargeInView={surchargeInView}
        rowsWithErrors={rowsWithErrors}/>
    </StyledSurchargesDashboard>
  );
});