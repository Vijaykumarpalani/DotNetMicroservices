import { styled } from '@mui/material';

export const StyledSurchargeView = styled('div')`
    max-width: 100%;
    display: ${({ display }) => display ?? 'block'};
    gap: 4rem;
`;

export const StyledSurchargesDashboard = styled('div')`
    display: flex;
    gap: 6rem;
    justify-content: ${({ isminimal }) => isminimal === 'false' ? 'space-between' : 'flex-start'};
    width: 100%;
    margin-top: ${({ isminimal }) => isminimal === 'false' ? '2' : 0}rem;
    padding: 1.3rem;
`;