import React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Skeleton, Typography } from '@mui/material';
import { StyledFlex } from 'vfs-data-portal-components';

export const LoadingItems = () => {
  
  return Array.from({ length: 3 }).map((_, i) => (
    <StyledFlex
      key={i}
      width="100%" margin="1rem 0">
      <Box m={1}>
        <Skeleton variant="circular">
          <Avatar sx={{ width: 24, height: 24 }}/>
        </Skeleton>
      </Box>
      <Box width="100%">
        <Skeleton width="90%">
          <Typography>.</Typography>
        </Skeleton>
      </Box>
    </StyledFlex>
  ));
};