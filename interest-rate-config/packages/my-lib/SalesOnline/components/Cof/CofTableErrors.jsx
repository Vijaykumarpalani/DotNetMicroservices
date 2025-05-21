import React, { memo, useMemo } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { StyledLabel } from '../../../components/_common/style';
import { StyledTableErrors } from './style';
import { Icon } from '../../../components/_common/icons/GenericIcon';
import { ERROR_COLOR } from '../../../mainApp/consts/ui.consts';
import { errMsgArrayVar } from '../../consts/cof/cof.consts';
import { useRowsWithErrors } from '../../hooks/_common/useRowErrors.hook';

export const CofTableErrors = memo(() => {
  const { rowsWithErrors } = useRowsWithErrors();
  
  const groupedByErrorType = useMemo(() => {
    if (!rowsWithErrors?.length) {
      return null;
    }
    
    return [...new Set(rowsWithErrors
      .map(row => row[errMsgArrayVar])
      .flat()
    )];
    
    
  }, [rowsWithErrors]);
  
  if (!groupedByErrorType?.length) {
    return null;
  }
  
  return (
    <StyledTableErrors>
      <StyledLabel>
        Errors:
      </StyledLabel>
      <List>
        {groupedByErrorType.map((errMsg) => (
          <ListItem key={errMsg}>
            <ListItemIcon>
              <Icon label="error" color={ERROR_COLOR}/>
            </ListItemIcon>
            <ListItemText primary={errMsg}/>
          </ListItem>
        ))}
      </List>
    </StyledTableErrors>
  
  );
});