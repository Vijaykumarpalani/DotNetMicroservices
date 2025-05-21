import { produce } from 'immer';
import {
  ACCESS_ROLE_TYPE_ENUM,
  VOLVO_SELECTED_CONFIG_DETAIL_TYPE,
  VOLVO_SELECTED_CONFIG_TYPE
} from '../../../types/volvoSelected/config.type';
import { TODAY } from '../../../consts/_globals.consts';

const { WRITE, READ } = ACCESS_ROLE_TYPE_ENUM;

const { INTEREST_RATE } = VOLVO_SELECTED_CONFIG_DETAIL_TYPE;
const initialState = {
  account: null,
  originalRows: [],
  updatedRows: [],
  latestValidFrom: null,
  validFrom: TODAY,
  resetLoading: false,
  unauthorizedPermissions: {
    [READ]: null,
    [WRITE]: null
  }
};

const validate = (row) => {
  if (!row[INTEREST_RATE]) {
    return { ...row, [INTEREST_RATE]: '', error: true, errorMsg: 'Interest Rate is required' };
  } else if (typeof row[INTEREST_RATE] !== 'number' || isNaN(row[INTEREST_RATE]) || row[INTEREST_RATE] <= 0) {
    return { ...row, error: true, errorMsg: 'Interest Rate must be a positive number' };
  }
  return { ...row, [INTEREST_RATE]: +row[INTEREST_RATE], error: false, errorMsg: '' };
};

export const interestRateConfiguratorStore = (set, get) => ({
  ...initialState,
  setAccount: (account) => {
    set(
      produce(
        state => {
          state.account = account;
        }
      )
    );
  },
  setRows: (data) => {
    // Set an index for the data grid manipulation
    const rows = data[VOLVO_SELECTED_CONFIG_TYPE.DETAIL]?.map((item, idx) => ({ ...item, id: idx })) || [];
    set(
      produce(
        state => {
          state.originalRows = rows;
          state.updatedRows = rows;
          state.latestValidFrom = data[VOLVO_SELECTED_CONFIG_TYPE.VALID_FROM];
        }
      )
    );
  },
  updateRow: newRow => {
    const reviewedRow = validate(newRow);
    set(
      produce(
        state => {
          const index = state.updatedRows.findIndex(r => r.id === newRow.id);
          state.updatedRows[index] = reviewedRow;
        }
      )
    );
  },
  reset: () => {
    set(
      produce(
        state => {
          state.resetLoading = true;
          state.updatedRows = state.originalRows;
          state.unauthorizedPermissions = initialState.unauthorizedPermissions;
          state.validFrom = initialState.validFrom;
        }
      )
    );
    
    const removeLoading = () => {
      set(
        produce(
          state => {
            state.resetLoading = false;
          }
        )
      );
    };
    
    setTimeout(() => removeLoading(), 500);
    
  },
  setValidFrom: (value) => {
    set(
      produce(
        state => {
          state.validFrom = value;
        }
      )
    );
  },
  setUnauthorized: (keyArg) => {
    set(
      produce(
        state => {
          state.unauthorizedPermissions = {
            ...state.unauthorizedPermissions,
            ...keyArg
          };
        }
      )
    );
  },
  cleanup: () => {
    set(
      produce(() => initialState)
    );
  }
});