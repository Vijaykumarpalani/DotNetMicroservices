export const SURCHARGES_LIST = {
  CONFIGURATION_NAME: 'configurationName',
  SURCHARGE_CONFIGURATION: 'surchargeConfiguration', // []SURCHARGES_LIST_ITEM
};

export const SURCHARGES_LIST_ITEM = {
  NAME: 'name',
};

export const SURCHARGE = {
  CONFIGURATION_NAME: 'configurationName',
  CREATE_DATE: 'createDate',
  DETAIL: 'detail', // []SURCHARGE_POINTS_KEYS
  SURCHARGE_NAME: 'surchargeName',
  USERNAME: 'userName',
  VALID_FROM: 'validFrom',
  UPDATED_DATE: 'updatedDate',
};


/**
 * @typedef {Object} SurchargePointKeys
 * @property {number} basePoints - Required base points
 * @property {string} [businessArea] - Optional business area
 * @property {string} [revenueOver50M] - Optional flag for revenue
 * @property {string} [creditRating] - Optional credit rating
 */

export const SURCHARGE_POINTS_KEYS = {
  BASE_POINTS: 'basePoints',
  BUSINESS_AREA: 'businessArea',
  REVENUE_OVER_50M: 'revenueOver50M',
  CREDIT_RATING: 'creditRating',
};