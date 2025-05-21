import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { GAP } from '../../consts/ui.consts';

export const StyledContainer = styled('div')`
    width: 100%;
    min-height: 80vh;
    background-color: #F7F7F7;
    padding: 2rem ${GAP};
`;

export const StyledVolvoSelected = styled('div')`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    gap: 5rem;
    padding-bottom: 5rem;
    position: relative;
    height: 100%;
    padding-top: ${GAP};
`;

export const StyledVolvoSelectedTime = styled('div')`
    margin-bottom: 2rem;
`;

export const StyledVolvoSelectedActions = styled('div')`
    display: flex;
    flex-direction: column;
    height: fit-content;
    position: sticky;
    top: 7rem;
    background: rgba(0, 0, 0, .11);
    padding: 2rem;
    border-radius: .4rem;
`;

export const StyledInstructions = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 4rem;
`;

export const StyledVolvoSelectedUnauthorized = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 35rem;
    margin-top: 2rem;
    gap: 1rem;
`;

export const StyledVolvoSelectedTableContainer = styled(Box)`
    min-width: 85rem;
`;