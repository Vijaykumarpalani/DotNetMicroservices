import React, { memo } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { StyledControlLabel } from '../style';

export const RadioSelection = memo(({ list, itemLabel, value, handleChange }) => {
  
  
  return (
    <FormControl sx={{ width: 'fit-content' }}>
      <RadioGroup
        value={value}
        onChange={handleChange}
      >
        {list?.map((item) => (
          <StyledControlLabel
            key={item[itemLabel]}
            value={item[itemLabel]}
            control={<Radio/>}
            label={item[itemLabel]}/>
        ))}
      </RadioGroup>
    </FormControl>
  );
});
