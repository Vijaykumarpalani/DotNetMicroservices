import { styled, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { ERROR_COLOR, PADDING, REGULAR_FONT_SIZE, TABLE_FONT_SIZE } from '../../consts/ui.consts';

export const RegularText = styled(Typography)`
    font-size: ${REGULAR_FONT_SIZE};
    font-weight: ${({ fontWeight }) => fontWeight || 400};
    color: ${({ color }) => color ?? '#000000'};
    cursor: ${({ cursor }) => cursor || 'auto'};
    margin: ${({ margin }) => margin};
`;


export const StyledViewWrapper = styled('div')`
    display: grid;
    grid-template-columns: 1.2fr 6.5fr;
    position: relative;
`;

export const StyledDashboard = styled('div')`
    width: 100%;
    overflow: auto;
`;

export const StyledContentWrapper = styled('div')`
    background: #F8F8F8;
    padding: ${PADDING};
    min-height: 80vh;
`;

export const StyledTableWrapper = styled('div')`
    max-width: 100%;
`;

export const StyledDataTable = styled(DataGrid)`
    background-color: #FFFFFF;
    overflow-x: auto;
    width: 100%;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */

    &::-webkit-scrollbar {
        width: 0 !important
    }

    .MuiDataGrid-columnHeaders {
        background-color: #C4D2D5 !important;
    }

    .MuiDataGrid-columnHeaderTitle {
        font-weight: 600 !important;
        text-transform: capitalize;
        font-size: ${REGULAR_FONT_SIZE};
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

export const StyledGroup = styled('div')`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: 3rem;
`;

export const StyledLabel = styled(Typography)`
    text-transform: capitalize;
    font-size: ${TABLE_FONT_SIZE};
    color: ${({ color }) => color ?? 'inherit'};
`;

export const StyledValue = styled(Typography)`
    color: #000;
    font-weight: 600;
    font-size: ${REGULAR_FONT_SIZE};
`;

export const StyledDatePicker = styled(DatePicker)`
    width: 100% !important;
    background-color: #FFFFFF;
    border-radius: 1rem;
    min-width: 0 !important;

    .MuiStack-root {
        overflow: visible;

        .MuiFormControl-root.MuiTextField-root {
        }
    }

`;

export const StyledSmallIcon = styled('i')`
    font-size: ${({ size }) => size ?? TABLE_FONT_SIZE};
    color: ${({ color }) => color};
`;

export const StyledCardsGallery = styled('div')`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
`;

export const StyledControlLabel = styled(FormControlLabel)`
    span {
        font-size: ${REGULAR_FONT_SIZE};
    }
`;

export const StyledDashboardContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const StyledUnauthorized = styled(Box)`
    display: flex;
    margin-top: 2rem;
    gap: 2rem;
    max-width: 35rem;
`;