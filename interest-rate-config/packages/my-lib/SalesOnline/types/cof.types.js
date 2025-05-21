export const COF_CONFIGURATION = {
  CONFIGURATION_NAME: 'configurationName',
  COUNTRY: 'country',
  CURRENCY: 'currency',
  BASE_INDEX: 'baseIndex',
  TERM: 'term',
  RESIDUAL: 'residual',
  AMORT_PER_YEAR: 'amortPerYear',
  FORWARD_START: 'forwardStart',
  PRICING_DECIMALS: 'pricingDecimals',
  VALID_FROM: 'validFrom',
  USERNAME: 'username',
  USER_ID: 'userId',
  BASE_RATE: 'baseRate', // COF_BASE_RATE,
  BASIS_POINTS: 'basisPoints', // COF_BASIS_POINTS
  BASIS_SWAP: 'basisSwaps', // COF_BASIS_SWAP
  UPDATED_DATE: 'updatedDate',
};

export const COF_BASE_RATE = {
  UPDATED_DATE: 'updatedDate',
  USERNAME: 'username',
  BASE_RATE: 'baseRate',
  USER_ID: 'userId',
};

export const COF_BASIS_POINTS = {
  DETAIL: 'detail' // []COF_BASIS_POINTS_DETAIL
};

export const COF_BASIS_SWAP = {
  DETAIL: 'detail', // []COF_BASIS_SWAPS_DETAIL
};

export const COF_BASIS_POINTS_DETAIL = {
  ID: 'id',
  TERM: 'term',
  BASIS_POINTS: 'basisPoints',
  USER_ID: 'userId',
  USERNAME: 'username',
  UPDATED_DATE: 'updatedDate',
};


export const COF_BASIS_SWAPS_DETAIL = {
  ID: 'id',
  TERM: 'term',
  BASIS_SWAP: 'basisSwap',
  UPDATED_DATE: 'updatedDate',
  USER_ID: 'userId',
  USERNAME: 'username',
};
