import { errMsgArrayVar } from '../../consts/cof/cof.consts';
import { PROFORMA_POINTS_KEYS } from '../../types/proforma.types';
import { renderDisabledCell, renderEditableColumn } from '../ui/ui.util';
import { SURCHARGE, SURCHARGE_POINTS_KEYS } from '../../types/surcharges.types';
import { formatDateForDb } from './date.util';
import { createUpdatedDetailPayloadForOpex } from '../surcharges/surcharges.util';

export const validateRow = (originalRow, relevantKeys) => {
  const row = JSON.parse(JSON.stringify(originalRow));
  for (let key of relevantKeys) {
    const errMsg = `${key} is required`;
    if (isNaN(row[key]) || row[key] === null) {
      if (!row[errMsgArrayVar]?.includes(errMsg)) {
        if (!row[errMsgArrayVar]?.length) {
          row[errMsgArrayVar] = [errMsg];
        } else {
          row[errMsgArrayVar].push(errMsg);
        }
      }
      row['error'] = true;
    } else {
      if (row[errMsgArrayVar]?.length) {
        const idx = row[errMsgArrayVar].indexOf(errMsg);
        if (idx >= 0) {
          row[errMsgArrayVar].splice(idx, 1);
        }
        row['error'] = !!row[errMsgArrayVar]?.length;
      }
      row[key] = +row[key];
    }
  }
  
  return row;
};

export const capitalizeWords = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before uppercase letters
    .replace(/^./, (match) => match.toUpperCase()); // Capitalize first letter
};

export const transformKeysToCapitalized = (objArray) => {
  return objArray?.map((obj, idx) => {
    const transformedObj = {
      id: obj?.id ? obj.id : idx,
    };
    
    Object.entries(obj).forEach(([key, value]) => {
      transformedObj[capitalizeWords(key)] = value;
    });
    
    
    return transformedObj;
  });
};

export const toCamelCase = str =>
  str
    .toLowerCase()
    .replace(/^\w|[A-Z]|\b\w/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/g, '');

const disabledColumns = [capitalizeWords(PROFORMA_POINTS_KEYS.TERM), capitalizeWords(SURCHARGE_POINTS_KEYS.BUSINESS_AREA), capitalizeWords(SURCHARGE_POINTS_KEYS.REVENUE_OVER_50M)];

export const createColumns = (data) => {
  const objectReference = Object.keys(data[0]);
  return objectReference.map((key, idx) => {
    const type = typeof data[0][key];
    const disabled = type === 'string' || disabledColumns.includes(key);
    if (key.toLowerCase() !== 'id') {
      return {
        field: key,
        minWidth: 100,
        headerName: key,
        headerAlign: 'center',
        align: 'center',
        type,
        disabled,
        flex: objectReference.length === idx + 1 ? 1 : 0,
        editable: !disabled,
        renderCell: disabled && renderDisabledCell,
        renderHeader: !disabled && renderEditableColumn,
      };
    }
  }).filter(Boolean);
};

export const createSchema = (columns) => {
  return columns.map(column => ({
    column: column.headerName,
    type: column.type === 'string' ? String : Number,
    value: prop => prop[column.field]
  }));
};

export const createDetailPayload = (original, updated, relevantKeys) => {
  return original.map(item => {
    const match = updated.find(updatedItem => updatedItem['Id'] === item.id);
    
    const obj = relevantKeys.reduce((acc, curr) => {
      acc[toCamelCase(curr)] = match[curr];
      return acc;
    }, {});
    
    return {
      ...item,
      ...obj
    };
  });
};


export const createSurchargesPayload = ({ raw, updatedData, relevantKeys, newValidFrom, isOpex = false }) => {
  const clone = JSON.parse(JSON.stringify(raw));
  clone[SURCHARGE.DETAIL] = isOpex ?
    createUpdatedDetailPayloadForOpex({ rawDetail: raw[SURCHARGE.DETAIL], updatedData })
    : createDetailPayload(raw[SURCHARGE.DETAIL], updatedData, relevantKeys);
  clone[SURCHARGE.VALID_FROM] = formatDateForDb(newValidFrom);
  return clone;
};