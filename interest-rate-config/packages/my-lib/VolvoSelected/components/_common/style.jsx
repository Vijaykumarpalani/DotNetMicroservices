import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ERROR_COLOR, TABLE_FONT_SIZE } from '../../../mainApp/consts/ui.consts';


export const StyledDataTable = styled(DataGrid)`
    background-color: #FFFFFF;

    .MuiDataGrid-columnHeaders {
        background-color: #C4D2D5 !important;
    }

    .MuiDataGrid-columnHeaderTitle {
        font-weight: 600 !important;
        text-transform: capitalize;
    }

    .error-row {
        color: ${ERROR_COLOR};
        border: 1px solid ${ERROR_COLOR};
    }

    font-size: ${TABLE_FONT_SIZE};

    input {
        font-size: ${TABLE_FONT_SIZE};
    }
`;

export const StyledDatePicker = styled(DatePicker)`
    width: 100% !important;
    background-color: #FFFFFF;
    border-radius: 1rem;

    .MuiStack-root {
        overflow: visible;

    }
`;
