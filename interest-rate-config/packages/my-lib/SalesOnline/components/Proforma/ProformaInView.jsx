import React, { memo, useCallback } from 'react';
import { StyledFlex } from 'vfs-data-portal-components';
import { useProforma } from '../../stores/reactQuery/hooks/proforma.hook';
import { CommonDataGrid } from '../../../mainApp/components/_common/tables/CommonDataGrid';
import { useProformaStore } from '../../stores/zustand/stores/global.store';
import { proformaSelector } from '../../stores/zustand/selectors/selectors';
import { ProformaInViewDashboard } from './ProformaInViewDashboard';
import { useRowsWithErrors } from '../../hooks/_common/useRowErrors.hook';
import { generateExcel } from '../../utils/_common/excel.util';
import { createSchema } from '../../utils/_common/_common.util';

export const ProformaInView = memo(({ proformaInView }) => {
  const { isLoading } = useProforma(proformaInView);
  const updatedData = useProformaStore(proformaSelector.updatedData);
  const columns = useProformaStore(proformaSelector.columns);
  
  const updateRow = useProformaStore(proformaSelector.updateRow);
  const reset = useProformaStore(proformaSelector.reset);
  const { rowsWithErrors } = useRowsWithErrors(updatedData);
  
  
  const handleUpdate = useCallback((newRow) => {
    updateRow(proformaInView, newRow);
    return newRow;
  }, [proformaInView]);
  
  const handleReset = useCallback(() => {
    reset(proformaInView);
  }, [proformaInView]);
  
  const handleExport = () => {
    const schema = createSchema(columns);
    return generateExcel({
      schema,
      fileName: `Proforma_Surcharges_${proformaInView}`,
      data: updatedData
    });
  };
  
  
  if (!columns?.length) return null;
  
  return (
    <StyledFlex width="100%" align="flex-start" gap="6rem">
      <CommonDataGrid
        width="fit-content"
        loading={isLoading}
        columns={columns}
        rows={updatedData}
        reset={handleReset}
        handleUpdate={handleUpdate}
        rowsWithErrors={rowsWithErrors}
        handleExport={handleExport}
      />
      <ProformaInViewDashboard
        proformaInView={proformaInView}
        rowsWithErrors={rowsWithErrors}
      />
    </StyledFlex>
  );
});