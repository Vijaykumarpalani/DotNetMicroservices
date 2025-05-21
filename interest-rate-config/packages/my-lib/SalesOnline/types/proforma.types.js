export const PROFORMA_LIST = {
  CONFIGURATION_NAME: 'configurationName',
  SURCHARGES: 'surchargeConfiguration', // []SURCHARGES_LIST_ITEM
};

export const PROFORMA_LIST_ITEM = {
  NAME: 'name',
};

export const PROFORMA = {
  CONFIGURATION_NAME: 'configurationName',
  VALID_FROM: 'validFrom',
  CREATE_DATE: 'createDate',
  USERNAME: 'userName',
  SURCHARGE: 'surchargeName',
  UPDATED_DATE: 'updatedDate',
  DETAIL: 'detail', // []SURCHARGE_POINTS_KEYS
};

export const PROFORMA_POINTS_KEYS = {
  BASE_POINTS: 'basePoints', //*required
  BUSINESS_AREA: 'businessArea', // optional
  TERM: 'term', // optional
};

export const PROFORMA_CONFIG = {
  CREATE_DATE: 'createDate',
  ID: 'id',
  MIN_SPREAD: 'minspread',
  PROFORMA: 'proforma',
  RATE_CONFIGURATION_ID: 'rateConfigurationId',
  USERNAME: 'userName',
  USER_ID: 'userId',
  VALID_FROM: 'validFrom',
  UPDATED_DATE: 'updatedDate',
};