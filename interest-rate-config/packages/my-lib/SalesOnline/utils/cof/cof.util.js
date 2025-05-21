import {
  COF_BASIS_POINTS,
  COF_BASIS_POINTS_DETAIL,
  COF_BASIS_SWAP,
  COF_BASIS_SWAPS_DETAIL,
  COF_CONFIGURATION
} from '../../types/cof.types';
import { TABLE_KEYS } from '../../consts/cof/cof.consts';
import { formatDateForDb } from '../_common/date.util';

const { BASIS_SWAP, BASIS_POINTS, TERM, VALID_FROM } = COF_CONFIGURATION;

const updateCofDetail = ({ cofDetail, updatedTableData, tableKey, cofKey }) => {
  return updatedTableData.map(updatedRow => {
    const originalValue = cofDetail.find(item => item[TERM] === updatedRow[TERM]);
    const newValue = updatedRow?.[tableKey] ? updatedRow[tableKey] : originalValue[cofKey];
    
    if (originalValue) {
      return {
        ...originalValue,
        [cofKey]: newValue
      };
    }
    
    return {
      ['id']: 0,
      [TERM]: updatedRow[TERM],
      [cofKey]: newValue
    };
  });
};

export const calculateLending = ({ basisPoints, basisSwap, baseRate }) => {
  return (!!basisPoints && !!basisSwap) ?
    Math.round(baseRate * 100) + basisPoints + basisSwap
    :
    0;
};

export const prepareUpdatePayload = ({ cofConfiguration, updatedTableData, newValidFrom }) => {
  const updatedBasisPoints = updateCofDetail({
    cofDetail: cofConfiguration[BASIS_POINTS][COF_BASIS_POINTS.DETAIL],
    updatedTableData,
    tableKey: TABLE_KEYS.BASIS_POINTS,
    cofKey: TABLE_KEYS.BASIS_POINTS
  });
  
  const updatedBasisSwaps = updateCofDetail({
    cofDetail: cofConfiguration[BASIS_SWAP][COF_BASIS_SWAP.DETAIL],
    updatedTableData,
    tableKey: TABLE_KEYS.BASIS_SWAP,
    cofKey: COF_BASIS_SWAPS_DETAIL.BASIS_SWAP
  });
  const updatedConfigObjectClone = JSON.parse(JSON.stringify(cofConfiguration));
  updatedConfigObjectClone[BASIS_POINTS][COF_BASIS_POINTS.DETAIL] = updatedBasisPoints;
  updatedConfigObjectClone[BASIS_SWAP][COF_BASIS_SWAP.DETAIL] = updatedBasisSwaps;
  updatedConfigObjectClone[VALID_FROM] = formatDateForDb(newValidFrom);
  
  return updatedConfigObjectClone;
};

export const combineCofData = data => {
  const cofBasisPoints = data[BASIS_POINTS]?.[COF_BASIS_POINTS.DETAIL] || [];
  const cofBasisSwap = data[BASIS_SWAP]?.[COF_BASIS_SWAP.DETAIL] || [];
  
  const pointsMap = new Map();
  const swapMap = new Map();
  const result = [];
  
  // Index both arrays by TERM
  for (const row of cofBasisPoints) {
    pointsMap.set(row[COF_BASIS_POINTS_DETAIL.TERM], row);
  }
  
  for (const row of cofBasisSwap) {
    swapMap.set(row[COF_BASIS_SWAPS_DETAIL.TERM], row);
  }
  
  // Get all unique terms from both arrays, because the nr of terms in BasisSwap may differ from BasisPoints
  const allTerms = new Set([...pointsMap.keys(), ...swapMap.keys()]);
  
  for (const [idx, term] of allTerms.entries()) {
    const basisPoint = pointsMap.get(term);
    const basisSwap = swapMap.get(term);
    
    result.push({
      id: idx,
      [TERM]: term,
      [BASIS_POINTS]: basisPoint?.[COF_BASIS_POINTS_DETAIL.BASIS_POINTS],
      [BASIS_SWAP]: basisSwap?.[COF_BASIS_SWAPS_DETAIL.BASIS_SWAP],
    });
  }
  
  return result;
};
