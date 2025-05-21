import React, { memo, useCallback, useMemo } from 'react';
import { TABLE_KEYS } from '../../consts/cof/cof.consts';
import { CommonDataGrid } from '../../../mainApp/components/_common/tables/CommonDataGrid';
import { useCofStore } from '../../stores/zustand/stores/global.store';
import { cofSelector } from '../../stores/zustand/selectors/selectors';
import { generateExcel } from '../../utils/_common/excel.util';
import { COF_BASE_RATE, COF_CONFIGURATION } from '../../types/cof.types';
import { useRowsWithErrors } from '../../hooks/_common/useRowErrors.hook';
import { renderDisabledCell, renderEditableColumn } from '../../utils/ui/ui.util';
import { calculateLending } from '../../utils/cof/cof.util';
import { createSchema } from '../../utils/_common/_common.util';

export const CofTable = memo(({ isLoading }) => {
  const updatedTableData = useCofStore(cofSelector.updatedTableData);
  const updateRow = useCofStore(cofSelector.updateRow);
  const cofGeneralDetails = useCofStore(cofSelector.cofGeneralDetails);
  const updatedCofBaseRate = useCofStore(cofSelector.updatedCofConfiguration)?.[COF_CONFIGURATION.BASE_RATE]?.[COF_BASE_RATE.BASE_RATE];
  
  const reset = useCofStore(cofSelector.reset);
  const { rowsWithErrors } = useRowsWithErrors(updatedTableData);
  
  const columns = useMemo(() => {
    return [
      {
        field: TABLE_KEYS.TERM,
        headerName: 'Term',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        disabled: true,
        renderCell: renderDisabledCell,
        width: 80
      },
      {
        field: TABLE_KEYS.BASIS_POINTS,
        headerName: 'Basis Points',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        editable: true,
        type: 'number',
        renderHeader: renderEditableColumn,
        valueFormatter: (value) => value?.toFixed(2), // Show rounded value
      },
      {
        field: TABLE_KEYS.BASIS_SWAP,
        headerName: 'Basis Swap',
        width: 150,
        headerAlign: 'center',
        align: 'center',
        editable: true,
        type: 'number',
        renderHeader: renderEditableColumn,
        valueFormatter: (value) => value?.toFixed(2), // Show rounded value
      },
      {
        field: TABLE_KEYS.LENDING,
        headerAlign: 'center',
        align: 'center',
        headerName: 'Lending',
        type: 'number',
        renderCell: renderDisabledCell,
        flex: 1,
        valueGetter: (value, row) => {
          return calculateLending({
            baseRate: updatedCofBaseRate,
            basisPoints: row[TABLE_KEYS.BASIS_POINTS],
            basisSwap: row[TABLE_KEYS.BASIS_SWAP],
          });
        }
      }
    ];
    
  }, [updatedCofBaseRate]);
  
  const handleUpdate = useCallback((newRow) => {
    updateRow(newRow);
    return newRow;
  }, [updateRow]);
  
  
  const handleExport = () => {
    const schema = createSchema(columns);
    return generateExcel({
      schema,
      fileName: `Sales_Online_COF_${cofGeneralDetails[COF_CONFIGURATION.VALID_FROM]}`,
      data: updatedTableData
    });
  };
  
  
  return (
    <CommonDataGrid
      width="100%"
      loading={isLoading}
      columns={columns}
      rows={updatedTableData}
      handleUpdate={handleUpdate}
      rowsWithErrors={rowsWithErrors}
      reset={reset}
      handleExport={handleExport}
    />
  );
});