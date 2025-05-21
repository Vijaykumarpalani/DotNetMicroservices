import React, { memo, useCallback } from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { StyledFlex } from 'vfs-data-portal-components';
import { useVolvoSelectedGetConfig } from '../../stores/reactQuery/hooks/volvoSelected.hook';
import { StyledInstructions } from './style';
import { VolvoSelectedTime } from './VolvoSelectedTime';
import { Icon } from '../../../mainApp/components/_common/icons/GenericIcon';

export const VolvoSelectedTableInstructions = memo(({ setIsLoading }) => {
  const { refetch } = useVolvoSelectedGetConfig();
  
  const handleRefetch = useCallback(async () => {
    setIsLoading(true);
    await refetch();
    setIsLoading(false);
  }, [refetch, setIsLoading]);
  
  return (
    <StyledInstructions>
      <VolvoSelectedTime/>
      <StyledFlex>
        <Typography>Double click on a row to edit</Typography>
        <Tooltip title="Edit in table" placement="top">
          <IconButton>
            <Icon label="edit"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Refresh data" placement="top">
          <IconButton onClick={handleRefetch} color="inherit">
            <Icon label="refresh"/>
          </IconButton>
        </Tooltip>
      </StyledFlex>
    </StyledInstructions>
  );
});