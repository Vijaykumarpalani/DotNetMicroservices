import { produce } from 'immer';
import { createColumns, transformKeysToCapitalized, validateRow } from '../../../utils/_common/_common.util';
import { formatDateForPicker } from '../../../utils/_common/date.util';
import { PROFORMA, PROFORMA_POINTS_KEYS } from '../../../types/proforma.types';

export const TODAY = new Date();

const initialState = {
  proformaInView: null,
  originalProformaDetails: null,
  updatedProformaDetails: null,
  proformaDict: {
    /*
    [name]: {
      columns: [],
      originalData: [],
      updatedData: [],
      raw: [],
      originalValidFrom: null,
      validFrom: TODAY,
      newValidFrom: TODAY,
      minimalData: boolean
    }
     */
  },
};


export const proformaStore = (set, get) => ({
  ...initialState,
  setProformaDetails: (data) => {
    set(
      produce(
        state => {
          state.originalProformaDetails = data;
          state.updatedProformaDetails = data;
        }
      )
    );
  },
  updateProformaDetails: (key, value) => {
    set(
      produce(
        state => {
          state.updatedProformaDetails[key] = value ? +value : value;
        }
      )
    );
  },
  setProformaInView: (surchargeName) => {
    set(
      produce(
        state => {
          state.proformaInView = surchargeName;
        }
      )
    );
  },
  setProformaObject: (surchargeName, data) => {
    const arrangedForTable = transformKeysToCapitalized(data[PROFORMA.DETAIL]);
    const columns = createColumns(arrangedForTable);
    const editableKeys = columns.filter(item => item.editable)?.map(item => item.field);
    
    set(
      produce(
        state => {
          state.proformaDict[surchargeName] = {
            raw: data,
            columns,
            editableKeys,
            minimalData: arrangedForTable.length === 1,
            originalData: arrangedForTable,
            updatedData: state.proformaDict?.[surchargeName]?.updatedData ?? arrangedForTable,
            originalValidFrom: formatDateForPicker(data[PROFORMA.CREATE_DATE]),
            validFrom: formatDateForPicker(data[PROFORMA.CREATE_DATE]),
            newValidFrom: TODAY,
          };
        }
      )
    );
  },
  updateRow: (surchargeName, newRow) => {
    const { editableKeys, minimalData } = get().proformaDict[surchargeName];
    const relevantKeys = minimalData ? [PROFORMA_POINTS_KEYS.BASE_POINTS] : editableKeys;
    const reviewedRow = validateRow(newRow, relevantKeys);
    
    set(
      produce(
        state => {
          const index = state.proformaDict[surchargeName]['updatedData'].findIndex(r => r.id === reviewedRow.id);
          state.proformaDict[surchargeName]['updatedData'][index] = reviewedRow;
        }
      )
    );
  },
  goBackToDate: (value, surchargeName) => {
    set(
      produce(
        state => {
          state.proformaDict[surchargeName]['validFrom'] = value;
        }
      )
    );
  },
  reset: (surchargeName) => {
    set(
      produce(
        state => {
          state.updatedProformaDetails = state.originalProformaDetails;
          state.proformaDict[surchargeName] = {
            ...state.proformaDict[surchargeName],
            ['validFrom']: state.proformaDict[surchargeName]['originalValidFrom'],
            ['newValidFrom']: TODAY,
            updatedData: state.proformaDict[surchargeName]['originalData']
          };
        }
      )
    );
  },
  setNewValidFrom: (value, surchargeName) => {
    set(
      produce(
        state => {
          state.proformaDict[surchargeName]['newValidFrom'] = value;
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