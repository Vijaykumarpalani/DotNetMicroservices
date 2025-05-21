import React, { memo } from 'react';
import { StyledFlex } from 'vfs-data-portal-components';
import { useProformaStore } from '../../stores/zustand/stores/global.store';
import { proformaSelector } from '../../stores/zustand/selectors/selectors';
import { formatDateTimeForDisplay } from '../../utils/_common/date.util';
import { StyledGroup, StyledLabel, StyledValue } from '../../../mainApp/components/_common/style';
import { PROFORMA } from '../../types/proforma.types';
import { ProformaSubmit } from './ProformaSubmit';

export const ProformaInViewDashboard = memo(({ proformaInView, rowsWithErrors }) => {
  const details = useProformaStore(proformaSelector.proformaDict)[proformaInView]?.raw;
  
  return (
    <StyledFlex align="flex-start" gap="7rem">
      <div>
        <StyledGroup>
          <StyledLabel>
            valid from
          </StyledLabel>
          <StyledValue>
            {formatDateTimeForDisplay(details?.[PROFORMA.VALID_FROM])}
          </StyledValue>
        </StyledGroup>
        <StyledGroup>
          <StyledLabel>
            updated date
          </StyledLabel>
          <StyledValue>
            {formatDateTimeForDisplay(details?.[PROFORMA.UPDATED_DATE])}
          </StyledValue>
        </StyledGroup>
        <StyledGroup>
          <StyledLabel>
            Created by
          </StyledLabel>
          <StyledValue>
            {details?.[PROFORMA.USERNAME]}
          </StyledValue>
        </StyledGroup>
      </div>
      <ProformaSubmit
        proformaInView={proformaInView}
        rowsWithErrors={rowsWithErrors}
      />
    </StyledFlex>
  );
});