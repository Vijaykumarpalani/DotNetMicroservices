import React, { useMemo } from 'react';
import { PrimaryButton, StyledFlex } from 'vfs-data-portal-components';
import { useCofStore } from '../../stores/zustand/stores/global.store';
import { cofSelector } from '../../stores/zustand/selectors/selectors';
import { useRowsWithErrors } from '../../hooks/_common/useRowErrors.hook';
import { BasicDatePicker } from '../../../mainApp/components/_common/inputs/DatePicker';
import { COF_BASE_RATE, COF_CONFIGURATION } from '../../types/cof.types';
import { useCofSubmitHook } from '../../hooks/cof/useCofSubmit.hook';
import { withWriteCheck } from '../error/SubmitHOC';

export const CofSubmit = () => {
  const rowsHaveChanged = useCofStore(cofSelector.rowsHaveChanged);
  const newValidFrom = useCofStore(cofSelector.newValidFrom);
  const setNewValidFrom = useCofStore(cofSelector.setNewValidFrom);
  const updatedCofBaseRate = useCofStore(cofSelector.updatedCofConfiguration)?.[COF_CONFIGURATION.BASE_RATE]?.[COF_BASE_RATE.BASE_RATE];
  const originalCofBaseRate = useCofStore(cofSelector.originalCofConfiguration)?.[COF_CONFIGURATION.BASE_RATE]?.[COF_BASE_RATE.BASE_RATE];
  const updatedPricingDecimals = useCofStore(cofSelector.updatedCofConfiguration)?.[COF_CONFIGURATION.PRICING_DECIMALS];
  const originalPricingDecimals = useCofStore(cofSelector.originalCofConfiguration)?.[COF_CONFIGURATION.PRICING_DECIMALS];
  const { rowsWithErrors } = useRowsWithErrors();
  const { handleSubmit, isPending } = useCofSubmitHook();
  
  const canSubmit = useMemo(() => {
    const cofBaseRateChanged = originalCofBaseRate !== updatedCofBaseRate;
    const pricingDecimalsChanged = originalPricingDecimals !== updatedPricingDecimals;
    return (!!rowsHaveChanged || cofBaseRateChanged || pricingDecimalsChanged) && !rowsWithErrors?.length;
  }, [rowsHaveChanged, rowsWithErrors?.length, updatedCofBaseRate, originalCofBaseRate, originalPricingDecimals, updatedPricingDecimals]);
  
  
  return (
    <StyledFlex gap="2rem" align="flex-start" direction="column-reverse">
      <PrimaryButton
        disabled={!canSubmit || isPending}
        isLoading={isPending}
        onClick={handleSubmit}>
        update
      </PrimaryButton>
      {
        !!canSubmit &&
        <BasicDatePicker
          label="New valid from"
          value={newValidFrom}
          onChange={setNewValidFrom}
          disablePast={true}
        />
      }
    </StyledFlex>
  );
};

export const CofDashboardSubmit = withWriteCheck(CofSubmit);