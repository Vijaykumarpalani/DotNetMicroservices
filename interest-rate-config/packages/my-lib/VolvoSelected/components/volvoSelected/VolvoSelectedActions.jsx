import React from 'react';
import { Label, PrimaryButton, SecondaryButton, StyledFlex } from 'vfs-data-portal-components';
import { useInterestRateConfiguratorStore } from '../../stores/zustand/stores/global.store';
import { volvoSelectedSelector } from '../../stores/zustand/selectors/selectors';
import { StyledVolvoSelectedActions } from './style';
import { VolvoSelectedValidFrom } from './VolvoSelectedValidFrom';
import { useSubmit } from '../../hooks/useSubmit.hook';
import { useVolvoSelectedRowsWithErrors } from '../../hooks/useVolvoSelectedRowsWIthErrors.hook';
import { ACCESS_ROLE_TYPE_ENUM } from '../../types/volvoSelected/config.type';
import { InsufficientRights } from '../../../SalesOnline/components/error/InsufficientRights';
import { StyledGroup } from '../../../mainApp/components/_common/style';

export const VolvoSelectedActions = () => {
  const rowsHaveChanged = useInterestRateConfiguratorStore(volvoSelectedSelector.rowsHaveChanged);
  const updatedRows = useInterestRateConfiguratorStore(volvoSelectedSelector.updatedRows);
  const reset = useInterestRateConfiguratorStore(volvoSelectedSelector.reset);
  const unauthorizedWrite = useInterestRateConfiguratorStore(volvoSelectedSelector.unauthorizedPermissions)[ACCESS_ROLE_TYPE_ENUM.WRITE];
  const { rowsWithErrors } = useVolvoSelectedRowsWithErrors();
  const { submit, isLoading } = useSubmit();
  
  if (!updatedRows?.length) {
    return null;
  }
  
  return (
    <StyledVolvoSelectedActions>
      <StyledGroup>
        <Label>set new configuration</Label>
        <VolvoSelectedValidFrom/>
        {!!unauthorizedWrite &&
          <InsufficientRights/>
        }
        <StyledFlex gap="2rem" margin="3rem 0 0 0">
          <PrimaryButton
            onClick={submit}
            isLoading={isLoading}
            disabled={!rowsHaveChanged || !!rowsWithErrors?.length || isLoading || !!unauthorizedWrite}>
            save
          </PrimaryButton>
          {rowsHaveChanged &&
            <SecondaryButton
              disabled={isLoading}
              onClick={reset}>
              reset
            </SecondaryButton>}
        </StyledFlex>
      </StyledGroup>
    </StyledVolvoSelectedActions>
  );
};