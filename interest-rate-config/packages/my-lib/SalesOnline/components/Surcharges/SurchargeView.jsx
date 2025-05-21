import React, { memo, useCallback } from 'react';
import { SmallerLoader } from 'vfs-data-portal-components';
import { useSurchargesStore } from '../../stores/zustand/stores/global.store';
import { surchargesSelector } from '../../stores/zustand/selectors/selectors';
import { useSurcharge } from '../../stores/reactQuery/hooks/surcharges.hook';
import { CommonDataGrid } from '../../../mainApp/components/_common/tables/CommonDataGrid';
import { StyledSurchargeView } from './style';
import { SurchargeViewDashboard } from './SurchargeViewDashboard';
import { useRowsWithErrors } from '../../hooks/_common/useRowErrors.hook';
import { generateExcel } from '../../utils/_common/excel.util';
import { createSchema } from '../../utils/_common/_common.util';

export const SurchargeView = memo(({ surchargeInView }) => {
  const { isLoading } = useSurcharge(surchargeInView);
  const updateRow = useSurchargesStore(surchargesSelector.updateRow);
  const updatedData = useSurchargesStore(surchargesSelector.updatedData);
  const columns = useSurchargesStore(surchargesSelector.columns);
  const minimalData = useSurchargesStore(surchargesSelector.minimalData);
  const reset = useSurchargesStore(surchargesSelector.reset);
  
  const { rowsWithErrors } = useRowsWithErrors(updatedData);
  
  const handleUpdate = useCallback((newRow) => {
    updateRow(surchargeInView, newRow);
    return newRow;
  }, [surchargeInView]);
  
  const handleReset = useCallback(() => {
    reset(surchargeInView);
  }, [surchargeInView]);
  
  const handleExport = () => {
    const schema = createSchema(columns);
    return generateExcel({
      schema,
      fileName: `Sales_Online_Surcharges_${surchargeInView}`,
      data: updatedData
    });
  };
  
  if (isLoading) {
    return <SmallerLoader/>;
  }
  if (!columns) {
    return null;
  }
  
  
  return (
    <StyledSurchargeView display={minimalData ? 'flex' : 'block'}>
      <CommonDataGrid
        key={minimalData}
        loading={isLoading}
        columns={columns}
        rows={updatedData}
        handleUpdate={handleUpdate}
        isMinimal={minimalData}
        rowsWithErrors={rowsWithErrors}
        reset={handleReset}
        handleExport={handleExport}
      />
      <SurchargeViewDashboard
        isMinimal={minimalData}
        rowsWithErrors={rowsWithErrors}
        surchargeInView={surchargeInView}/>
    </StyledSurchargeView>
  );
});