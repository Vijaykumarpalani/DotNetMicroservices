import React, { memo, useCallback, useMemo } from 'react';
import { Button } from '@mui/material';
import { getGridNumericOperators, getGridStringOperators } from '@mui/x-data-grid';
import { StyledFlex } from 'vfs-data-portal-components';
import { StyledDataTable, StyledTableWrapper } from '../style';


export const CommonDataGrid = memo((props) => {
  const { rows, columns, handleUpdate, rowsWithErrors, loading, reset, handleExport, isMinimal } = props;
  
  const columnsWithCustomFilters = useMemo(() => {
    return columns?.map(column => {
      if (column.type === 'number') {
        return {
          ...column,
          filterOperators: getGridNumericOperators().filter(
            (operator) => operator.value === '>' || operator.value === '<'
          )
        };
      } else {
        return {
          ...column,
          filterOperators: getGridStringOperators().filter(operator => operator.value === 'contains')
        };
      }
    });
  }, [columns]);
  
  const isItReallyError = useCallback((row) => {
    return (rowsWithErrors?.find((r) => r.id === row.id))?.error;
  }, [rowsWithErrors]);
  
  const getRowClassName = (params) => {
    if (params.row.error) {
      const isError = isItReallyError(params.row);
      return isError ? 'error-row' : '';
    }
  };
  
  const CustomFooter = () => {
    return (
      <StyledFlex
        gap="1.5rem"
        width="100%"
        justify={isMinimal ? 'center' : 'flex-end'}
        sx={{
          padding: '10px',
          backgroundColor: '#f5f5f5',
          borderTop: '1px solid #ddd',
        }}
      >
        <Button
          sx={{ textTransform: 'capitalize' }}
          onClick={reset}>
          reset
        </Button>
        <Button
          disabled={!!rowsWithErrors?.length}
          sx={{ textTransform: 'capitalize' }}
          onClick={handleExport}
        >
          export
        </Button>
      </StyledFlex>
    );
  };
  
  
  return (
    <StyledTableWrapper>
      <StyledDataTable
        autoHeight
        disableRowSelectionOnClick
        rows={rows}
        loading={loading}
        columns={columnsWithCustomFilters}
        editMode="row"
        processRowUpdate={handleUpdate}
        onProcessRowUpdateError={(error) => console.error(error)}
        slotProps={{
          loadingOverlay: {
            variant: 'linear-progress',
            noRowsVariant: 'skeleton',
          },
        }}
        slots={{ footer: CustomFooter }}
        
        getRowClassName={getRowClassName}
        hideFooterPagination={true}
      />
    </StyledTableWrapper>
  );
});
