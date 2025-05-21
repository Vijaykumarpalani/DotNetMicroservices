import React, { memo, useCallback, useState } from 'react';
import { VolvoSelectedDataGrid } from '../_common/table/VolvoSelectedDataGrid';
import { VOLVO_SELECTED_CONFIG_DETAIL_TYPE } from '../../types/volvoSelected/config.type';
import { StyledVolvoSelectedTableContainer } from './style';
import { useInterestRateConfiguratorStore } from '../../stores/zustand/stores/global.store';
import { volvoSelectedSelector } from '../../stores/zustand/selectors/selectors';
import { useVolvoSelectedRowsWithErrors } from '../../hooks/useVolvoSelectedRowsWIthErrors.hook';
import { VolvoSelectedTableInstructions } from './VolvoSelectedTableInstructions';

const {
  COUNTRY,
  TERM,
  INTEREST_RATE
} = VOLVO_SELECTED_CONFIG_DETAIL_TYPE;

const columns = [
  { field: COUNTRY, headerName: 'Country', flex: 1 },
  {
    field: TERM,
    headerName: 'Term',
    flex: 1,
    headerAlign: 'center', // Center the header text
    align: 'center',
  },
  {
    field: INTEREST_RATE,
    headerName: 'Interest Rate',
    flex: 1,
    editable: true,
    type: 'number'
  }
];

export const VolvoSelectedTable = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const rows = useInterestRateConfiguratorStore(volvoSelectedSelector.updatedRows);
  const updateRow = useInterestRateConfiguratorStore(volvoSelectedSelector.updateRow);
  const resetLoading = useInterestRateConfiguratorStore(volvoSelectedSelector.resetLoading);
  const { rowsWithErrors } = useVolvoSelectedRowsWithErrors();
  
  const handleUpdate = useCallback((row) => {
    updateRow(row);
    return row;
  }, [updateRow]);
  
  
  return (
    <StyledVolvoSelectedTableContainer position="relative">
      <VolvoSelectedDataGrid
        columns={columns}
        rows={rows}
        loading={resetLoading || isLoading}
        handleUpdate={handleUpdate}
        rowsWithErrors={rowsWithErrors}
      >
        <VolvoSelectedTableInstructions setIsLoading={setIsLoading}/>
      </VolvoSelectedDataGrid>
    </StyledVolvoSelectedTableContainer>
  );
});