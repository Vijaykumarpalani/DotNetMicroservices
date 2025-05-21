import React from 'react';
import { GREY } from '../../../mainApp/consts/ui.consts';
import { StyledEditCell } from '../../components/Cof/style';
import { Icon } from '../../../mainApp/components/_common/icons/GenericIcon';

export const renderDisabledCell = (field) => {
  return <span style={{ color: GREY }}>{field.value}</span>;
};

export const renderEditableColumn = (params) => {
  return (
    <StyledEditCell gap="1rem">
      <span>{params.colDef.headerName}</span>
      <Icon label="edit"/>
    </StyledEditCell>
  );
};

const maxLength = 25;
export const ellipsisMidSentence = ({ str }) => {
  
  if (str.length <= maxLength) return str;
  const halfLength = Math.floor((maxLength - 3) / 2);
  return str.slice(0, halfLength) + '...' + str.slice(str.length - halfLength);
};