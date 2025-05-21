import { styled } from '@mui/material';
import { PADDING } from '../../consts/ui.consts';

export const StyledHeader = styled('div')`
    height: 13vh;
    border-bottom: 1px solid #E6E6E6;
    padding-left: ${PADDING};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
`;