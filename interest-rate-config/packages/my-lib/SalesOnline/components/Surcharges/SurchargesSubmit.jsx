import React, { memo, useCallback, useMemo } from 'react';
import { PrimaryButton, StyledFlex } from 'vfs-data-portal-components';
import { useRowsHaveChanged, useSubmit } from '../../hooks/surcharges/useSurcharges.hook';
import { BasicDatePicker } from '../../../mainApp/components/_common/inputs/DatePicker';
import { useSurchargesStore } from '../../stores/zustand/stores/global.store';
import { surchargesSelector } from '../../stores/zustand/selectors/selectors';
import { withWriteCheck } from '../error/SubmitHOC';

export const Submit = memo(({ surchargeInView, rowsWithErrors }) => {
  const rowsHaveChanged = useRowsHaveChanged(surchargeInView);
  const setNewValidFrom = useSurchargesStore(surchargesSelector.setNewValidFrom);
  const newValidFrom = useSurchargesStore(surchargesSelector.surchargesDict)?.[surchargeInView]?.['newValidFrom'];
  const { handleSubmit, isPending } = useSubmit(surchargeInView);
  
  const canSubmit = useMemo(() => {
    return !!rowsHaveChanged && !rowsWithErrors?.length;
  }, [rowsHaveChanged, rowsWithErrors?.length]);
  
  const handleSetNewValidDate = useCallback((value) => {
    setNewValidFrom(value, surchargeInView);
  }, [setNewValidFrom, surchargeInView]);
  
  
  return (
    <StyledFlex direction="column-reverse" align="flex-start" gap="2rem">
      <PrimaryButton
        disabled={!canSubmit || isPending}
        isLoading={isPending}
        onClick={handleSubmit}
      >
        update
      </PrimaryButton>
      {
        !!canSubmit &&
        <BasicDatePicker
          label="New valid from"
          value={newValidFrom}
          onChange={handleSetNewValidDate}
          disablePast={true}
        />
      }
    </StyledFlex>
  );
});

export const SurchargesSubmit = withWriteCheck(Submit);