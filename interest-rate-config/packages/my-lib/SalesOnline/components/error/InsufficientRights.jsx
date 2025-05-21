import React from 'react';
import { Box, Typography } from '@mui/material';
import { StyledFlex } from 'vfs-data-portal-components';
import { RegularText, StyledUnauthorized } from '../../../mainApp/components/_common/style';

export const InsufficientRights = ({ message = 'Please request Read/Write roles to use this application.' }) => {
  
  return (
    <StyledUnauthorized>
      <i className="material-icons-outlined">lock</i>
      <StyledFlex gap="2rem" direction="column" align="flex-start">
        <Box>
          <Typography variant="h6" fontWeight={600}>Insufficient permissions</Typography>
          <RegularText>{message}</RegularText>
        </Box>
      </StyledFlex>
    </StyledUnauthorized>
  );
};