import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import { PADDING, REGULAR_FONT_SIZE } from '../../consts/ui.consts';

export const StyledNavbar = styled('div')`
    height: 100%;
    border-right: 1px solid #E6E6E6;
    min-height: 90vh;
`;

export const StyledLogoWrapper = styled('div')`
    height: 13vh;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledContent = styled('div')`
    padding-top: ${PADDING};
    padding-right: 1.3rem;
`;

export const StyledListItem = styled(ListItem)`
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
    background: ${({ isselected }) => isselected === 'true' ? '#E6E6E6' : 'transparent'};

    &:hover {
        background-color: #E6E6E6;
    }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
    min-width: 3rem;
    padding-right: 1rem;

    i {
        font-size: 2.8rem;
    }
`;

export const StyledListItemText = styled(ListItemText)`
    span {
        font-size: ${REGULAR_FONT_SIZE};
        color: ${({ isselected }) => isselected === 'true' ? '#888B8D' : 'inherit'};
    }
`;
