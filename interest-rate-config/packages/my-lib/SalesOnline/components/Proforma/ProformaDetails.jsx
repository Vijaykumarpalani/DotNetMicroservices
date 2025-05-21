import React, { useCallback } from 'react';
import { Tooltip } from '@mui/material';
import { LoadingMessage } from 'vfs-data-portal-components';
import { useProformaDetails } from '../../stores/reactQuery/hooks/proforma.hook';
import { useProformaStore } from '../../stores/zustand/stores/global.store';
import { proformaSelector } from '../../stores/zustand/selectors/selectors';
import { StyledProformaDetails } from './style';
import { PROFORMA_CONFIG } from '../../types/proforma.types';
import { StyledGroup, StyledLabel, StyledValue } from '../../../mainApp/components/_common/style';
import { formatDateTimeForDisplay } from '../../utils/_common/date.util';
import { UpdatableValue } from '../../../mainApp/components/_common/inputs/UpdatableValue';
import { ellipsisMidSentence } from '../../utils/ui/ui.util';

export const ProformaDetails = () => {
  const { isLoading: loadingProformaDetails } = useProformaDetails();
  const updatedProformaDetails = useProformaStore(proformaSelector.updatedProformaDetails);
  const updateProformaDetails = useProformaStore(proformaSelector.updateProformaDetails);
  
  const handleUpdate = useCallback(({ key, value }) => {
    updateProformaDetails(key, value);
  }, []);
  
  if (loadingProformaDetails) {
    return <LoadingMessage text="Loading proforma details" width="fit-content"/>;
  }
  
  if (!updatedProformaDetails) {
    return null;
  }
  
  return (
    <StyledProformaDetails>
      <UpdatableValue
        label="proforma"
        value={updatedProformaDetails?.[PROFORMA_CONFIG.PROFORMA]}
        handleChange={(e) => handleUpdate({
          key: PROFORMA_CONFIG.PROFORMA,
          value: e.target.value,
        })}
      />
      <UpdatableValue
        label="min spread"
        value={updatedProformaDetails?.[PROFORMA_CONFIG.MIN_SPREAD]}
        handleChange={(e) => handleUpdate({
          key: PROFORMA_CONFIG.MIN_SPREAD,
          value: e.target.value,
        })}
      />
      
      <StyledGroup>
        <StyledLabel>
          valid from
        </StyledLabel>
        <StyledValue>
          {formatDateTimeForDisplay(updatedProformaDetails?.[PROFORMA_CONFIG.VALID_FROM])}
        </StyledValue>
      </StyledGroup>
      <StyledGroup>
        <StyledLabel>
          updated date
        </StyledLabel>
        <StyledValue>
          {formatDateTimeForDisplay(updatedProformaDetails?.[PROFORMA_CONFIG.UPDATED_DATE])}
        </StyledValue>
      </StyledGroup>
      <StyledGroup>
        <StyledLabel>
          created by
        </StyledLabel>
        <Tooltip title={updatedProformaDetails?.[PROFORMA_CONFIG.USERNAME]}>
          <StyledValue>
            {ellipsisMidSentence({ str: updatedProformaDetails?.[PROFORMA_CONFIG.USERNAME] })}
          </StyledValue>
        </Tooltip>
      </StyledGroup>
    </StyledProformaDetails>
  );
};