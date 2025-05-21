import { SURCHARGE, SURCHARGE_POINTS_KEYS } from '../../types/surcharges.types';
import { NO_RATING_TRANSLATION, TABLE_KEYS, TABLE_RATING_TERMS } from '../../consts/surcharges/surcharges.consts';
import { transformKeysToCapitalized } from '../_common/_common.util';

const { BUSINESS_AREA, RATING_TERM, NONE } = TABLE_KEYS;
const { OVER_50M, UNDER_50M } = TABLE_RATING_TERMS;

export const arrangeData = ({ data, isOpex = false }) => {
  if (isOpex) {
    // Opex surcharges needs data manipulation, as described on mockup
    return data[SURCHARGE.DETAIL].reduce((acc, curr) => {
      const businesAarea = curr[SURCHARGE_POINTS_KEYS.BUSINESS_AREA];
      const ratingTerm = curr[SURCHARGE_POINTS_KEYS.REVENUE_OVER_50M] === 'TRUE' ? OVER_50M : UNDER_50M;
      const basisPoints = curr[SURCHARGE_POINTS_KEYS.BASE_POINTS];
      // Renaming header as defined in mockup
      const creditRating = curr[SURCHARGE_POINTS_KEYS.CREDIT_RATING] === NONE ? NO_RATING_TRANSLATION : curr[SURCHARGE_POINTS_KEYS.CREDIT_RATING];
      
      const idx = acc
        .findIndex(item =>
          item[BUSINESS_AREA] === businesAarea
          && item[RATING_TERM] === ratingTerm
        );
      
      
      if (idx < 0) {
        acc.push({
          [BUSINESS_AREA]: businesAarea,
          [RATING_TERM]: ratingTerm,
          [creditRating]: Math.round(basisPoints * 100) / 100
        });
      } else {
        acc[idx] = {
          ...acc[idx],
          id: idx,
          [creditRating]: Math.round(basisPoints * 100) / 100
        };
        
      }
      
      return acc;
    }, []);
  }
  
  return transformKeysToCapitalized(data[SURCHARGE.DETAIL]);
};


export const createUpdatedDetailPayloadForOpex = ({ rawDetail, updatedData }) => {
  // Opex surcharges requires to revert changes made in arrangeData() util
  
  return rawDetail.map(item => {
    const currRatingTerm = item[SURCHARGE_POINTS_KEYS.REVENUE_OVER_50M] === 'TRUE' ? OVER_50M : UNDER_50M;
    const match = updatedData.find(updatedItem => updatedItem[BUSINESS_AREA] === item[SURCHARGE_POINTS_KEYS.BUSINESS_AREA] && updatedItem[RATING_TERM] === currRatingTerm);
    const creditRating = item.creditRating === NONE ? NO_RATING_TRANSLATION : item.creditRating;
    
    
    const basePoints = match[creditRating];
    return {
      ...item,
      basePoints
    };
  });
};