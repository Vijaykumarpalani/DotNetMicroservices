import { styled } from '@mui/material';

export const StyledRateConfiguration = styled('div')`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    padding-left: 3rem;
    gap: 4rem;
`;

export const StyledRateConfigurationWrapper = styled('div')`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-auto-columns: auto;
    gap: 3rem;
`;
