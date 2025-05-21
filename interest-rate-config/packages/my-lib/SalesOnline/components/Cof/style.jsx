import { styled } from '@mui/material';
import { StyledFlex } from 'vfs-data-portal-components';
import { ERROR_COLOR, TABLE_FONT_SIZE } from '../../../mainApp/consts/ui.consts';

export const StyledCofWrapper = styled('div')`
    width: 100%;
    display: grid;
    //grid-template-columns: 2fr 1fr 0.6fr; // with Go back to calendar
    grid-template-columns: 2.5fr 1.3fr;
    column-gap: 4rem;
`;

export const StyledCofDashboard = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 2rem;
`;

export const StyledCofDashboardDetails = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
`;


export const StyledEditCell = styled(StyledFlex)`
    font-weight: 600;

    i {
        font-size: ${TABLE_FONT_SIZE};
    }
`;

export const StyledTableErrors = styled('div')`
    color: ${ERROR_COLOR};
    margin-top: 2rem;

    p {
        font-weight: 600;
    }
`;