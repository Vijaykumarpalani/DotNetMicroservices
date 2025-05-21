import React, { memo, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import { Popover, Typography } from '@mui/material';
import { getGridNumericOperators, getGridStringOperators } from '@mui/x-data-grid';
import { StyledDataTable } from '../style';
import { ERROR_COLOR } from '../../../../mainApp/consts/ui.consts';

const CustomPopover = memo(({ row, handlePopoverClose, open, anchorEl }) => {
  if (!row || !row.error) return null;
  return (
    <Popover
      sx={{
        pointerEvents: 'none',
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <Typography p={1} color={ERROR_COLOR}>{row.errorMsg}</Typography>
    </Popover>
  );
});

export const VolvoSelectedDataGrid = memo((props) => {
  const { rows, columns, handleUpdate, rowsWithErrors, loading } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(null);
  
  const columnsWithCustomFilters = useMemo(() => {
    return columns.map(column => {
      if (column.type === 'number') {
        return {
          ...column,
          valueFormatter: (params) => {
            return params?.value;
          },
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
  
  const handlePopoverOpen = (event) => {
    const id = +event.currentTarget.parentElement.dataset.id;
    const row = rows.find((r) => r.id === id);
    setValue(row);
    setAnchorEl(event.currentTarget);
  };
  
  const handlePopoverClose = () => {
  };
  
  const open = Boolean(anchorEl);
  
  const isItReallyError = useCallback((row) => {
    return (rowsWithErrors?.find((r) => r.id === row.id))?.error;
  }, [rowsWithErrors]);
  
  const getRowClassName = (params) => {
    if (params.row.error) {
      const isError = isItReallyError(params.row);
      return isError ? 'error-row' : '';
    }
  };
  
  return (
    <Box sx={{ width: '100%' }}>
      {props.children}
      <StyledDataTable
        rows={rows}
        loading={loading}
        columns={columnsWithCustomFilters}
        editMode="row"
        disableColumnResize
        processRowUpdate={handleUpdate}
        onProcessRowUpdateError={(error) => console.error(error)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slotProps={{
          cell: {
            onMouseEnter: handlePopoverOpen,
            onMouseLeave: handlePopoverClose,
          },
          loadingOverlay: {
            variant: 'linear-progress',
            noRowsVariant: 'skeleton',
          },
        }}
        autoHeight
        pageSizeOptions={[5, 10, 15, 20]}
        disableRowSelectionOnClick
        getRowClassName={getRowClassName}
      />
      <CustomPopover
        anchorEl={anchorEl}
        row={value}
        open={open}
        handlePopoverClose={handlePopoverClose}/>
    </Box>
  );
});
