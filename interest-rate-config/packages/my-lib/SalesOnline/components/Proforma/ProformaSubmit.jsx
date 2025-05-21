import React, { memo, useCallback, useMemo } from 'react';
import { PrimaryButton, StyledFlex } from 'vfs-data-portal-components';
import { useProformaDetailsHaveChanged, useRowsHaveChanged, useSubmit } from '../../hooks/proforma/useProforma.hook';
import { useProformaStore } from '../../stores/zustand/stores/global.store';
import { proformaSelector } from '../../stores/zustand/selectors/selectors';
import { withWriteCheck } from '../error/SubmitHOC';
import { BasicDatePicker } from '../../../mainApp/components/_common/inputs/DatePicker';

export const Submit = memo(({ proformaInView, rowsWithErrors }) => {
  const rowsHaveChanged = useRowsHaveChanged(proformaInView);
  const detailsHaveChanged = useProformaDetailsHaveChanged();
  const newValidFrom = useProformaStore(proformaSelector.proformaDict)?.[proformaInView]?.['newValidFrom'];
  const setNewValidFrom = useProformaStore(proformaSelector.setNewValidFrom);
  const { handleSubmit, isPending } = useSubmit({ proformaName: proformaInView, rowsHaveChanged, detailsHaveChanged });
  
  const handleSetNewValidDate = useCallback((value) => {
    setNewValidFrom(value, proformaInView);
  }, [setNewValidFrom, proformaInView]);
  
  
  const canSubmit = useMemo(() => {
    return (!!rowsHaveChanged || !!detailsHaveChanged) && !rowsWithErrors?.length;
  }, [rowsHaveChanged, detailsHaveChanged, rowsWithErrors?.length]);
  
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

export const ProformaSubmit = withWriteCheck(Submit);