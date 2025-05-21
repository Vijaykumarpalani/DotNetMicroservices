import React from 'react';
import { enGB } from 'date-fns/locale/en-GB';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StyledDatePicker } from '../style';

export const BasicDatePicker = (props) => {
  const {
    label, onChange, value, minDate, maxDate, width = '100%', disabled, onlyDate = false, disablePast = false
  } = props;
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
      <DemoContainer components={['DatePicker']} sx={{ width, overflow: 'visible' }}>
        <StyledDatePicker
          fullWidth
          variant="standard"
          disableOpenPicker={onlyDate}
          disabled={disabled}
          label={label}
          value={value}
          minDate={minDate}
          maxDate={maxDate}
          disablePast={disablePast}
          onChange={onChange}/>
      </DemoContainer>
    </LocalizationProvider>
  );
};