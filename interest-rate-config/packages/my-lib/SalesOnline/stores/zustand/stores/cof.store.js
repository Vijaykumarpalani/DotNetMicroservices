import { produce } from 'immer';
import { validateRow } from '../../../utils/_common/_common.util';
import { formatDateForPicker } from '../../../utils/_common/date.util';
import { COF_BASE_RATE, COF_CONFIGURATION } from '../../../types/cof.types';
import { TABLE_KEYS } from '../../../consts/cof/cof.consts';

const {
  CURRENCY,
  VALID_FROM,
  USERNAME,
  COUNTRY,
  UPDATED_DATE
} = COF_CONFIGURATION;

const {
  BASIS_POINTS,
  BASIS_SWAP,
} = TABLE_KEYS;
export const TODAY = new Date();

const initialState = {
  cofGeneralDetails: null,
  originalTableData: [],
  updatedTableData: [],
  originalCofConfiguration: null,
  updatedCofConfiguration: null,
  validFrom: TODAY,
  newValidFrom: TODAY,
};

const relevantKeys = [BASIS_POINTS, BASIS_SWAP];

export const cofStore = (set, get) => ({
  ...initialState,
  updateCofBaseRate: (value) => {
    set(
      produce(
        state => {
          state.updatedCofConfiguration[COF_CONFIGURATION.BASE_RATE][COF_BASE_RATE.BASE_RATE] = value ? +value : value;
        }
      )
    );
  },
  updateCofConfiguration: (key, value) => {
    set(
      produce(
        state => {
          state.updatedCofConfiguration[key] = value ? +value : value;
        }
      )
    );
  },
  setCofData: ({ tableData, configuration }) => {
    set(
      produce(
        state => {
          state.originalTableData = tableData;
          state.updatedTableData = tableData;
          state.originalCofConfiguration = configuration;
          state.updatedCofConfiguration = configuration;
          state.validFrom = formatDateForPicker(configuration[COF_CONFIGURATION.VALID_FROM]);
          state.cofGeneralDetails = {
            [CURRENCY]: configuration?.[CURRENCY],
            [COUNTRY]: configuration?.[COUNTRY],
            [USERNAME]: configuration?.[USERNAME],
            [VALID_FROM]: configuration?.[VALID_FROM],
            [UPDATED_DATE]: configuration?.[UPDATED_DATE],
          };
        }
      )
    );
  },
  updateRow: (newRow) => {
    const reviewedRow = validateRow(newRow, relevantKeys);
    set(
      produce(
        state => {
          const index = state.updatedTableData.findIndex(r => r.id === reviewedRow.id);
          state.updatedTableData[index] = reviewedRow;
        }
      )
    );
  },
  reset: () => {
    set(
      produce(
        state => {
          state.updatedTableData = state.originalTableData;
          state.updatedCofConfiguration = state.originalCofConfiguration;
          state.validFrom = formatDateForPicker(state.originalCofConfiguration[COF_CONFIGURATION.VALID_FROM]);
          state.newValidFrom = TODAY;
        }
      )
    );
  },
  goBackToDate: (value) => {
    set(
      produce(
        state => {
          state.validFrom = value;
        }
      )
    );
  },
  setNewValidFrom: (value) => {
    set(
      produce(
        state => {
          state.newValidFrom = value;
        }
      )
    );
  },
  cleanUp: () => {
    set(
      produce(() => initialState)
    );
  }
});