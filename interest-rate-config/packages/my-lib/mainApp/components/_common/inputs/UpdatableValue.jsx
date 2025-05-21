import React, { memo, useCallback, useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import { StyledGroup, StyledLabel, StyledValue } from '../style';
import { ERROR_COLOR } from '../../../consts/ui.consts';
import { Icon } from '../icons/GenericIcon';

export const UpdatableValue = memo(({ handleChange, label, value }) => {
  const [showInput, setShowInput] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const openInput = useCallback(() => {
    setShowInput(true);
  }, []);
  
  const handleEnter = useCallback(e => {
    if (e.key === 'Enter') {
      setShowInput(false);
    }
  }, []);
  
  const onClickAway = useCallback(() => {
    if (typeof value !== 'number' || isNaN(value)) {
      setErrorMsg(`${label} cannot be null`);
    } else {
      setShowInput(false);
      setErrorMsg('');
    }
  }, [label, value]);
  
  return (
    <StyledGroup>
      <StyledLabel color={!!errorMsg ? ERROR_COLOR : 'inherit'}>
        {label}
      </StyledLabel>
      <ClickAwayListener onClickAway={onClickAway}>
        {showInput ?
          <StyledTextField
            type="number"
            variant="standard"
            error={!!errorMsg}
            helperText={errorMsg}
            value={value}
            onChange={handleChange}
            onKeyUp={handleEnter}
          />
          :
          <StyledValue
            onDoubleClick={openInput}>
            {value}&nbsp;&nbsp;
            <Icon label="edit" onClick={openInput}/>
          </StyledValue>
        }
      </ClickAwayListener>
    </StyledGroup>
  );
  
  
});