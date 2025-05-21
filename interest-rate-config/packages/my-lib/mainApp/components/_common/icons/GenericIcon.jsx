import React from 'react';
import { StyledSmallIcon } from '../style';

export const Icon = ({ label, color, size }) => (
  <StyledSmallIcon
    className="material-icons-outlined"
    color={color}
    size={size}
  >
    {label}
  </StyledSmallIcon>
);