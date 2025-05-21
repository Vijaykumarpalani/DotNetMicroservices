import { produce } from 'immer';
import { arrangeData } from '../../../utils/surcharges/surcharges.util';
import { createColumns, validateRow } from '../../../utils/_common/_common.util';
import { formatDateForPicker } from '../../../utils/_common/date.util';
import { SURCHARGE } from '../../../types/surcharges.types';

export const TODAY = new Date();


const initialState = {
  surchargeInView: null,
  surchargesDict: {
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

export const surchargesStore = (set, get) => ({
  ...initialState,
  setSurchargeInView: (surchargeName) => {
    set(
      produce(
        state => {
          state.surchargeInView = surchargeName;
        }
      )
    );
  },
  setSurcharge: (surchargeName, data) => {
    const arrangedForTable = arrangeData({ data, isOpex: data[SURCHARGE.SURCHARGE_NAME].toLowerCase() === 'opex' });
    set(
      produce(
        state => {
          const surchargeInViewHasMinimalData = Object.keys(arrangedForTable?.[0])?.length <= 4;
          const columns = createColumns(arrangedForTable, surchargeInViewHasMinimalData);
          const editableKeys = columns.filter(item => item.editable)?.map(item => item.headerName);
          state.surchargesDict[surchargeName] = {
            raw: data,
            columns,
            editableKeys,
            minimalData: surchargeInViewHasMinimalData,
            originalData: arrangedForTable,
            updatedData: state.surchargesDict?.[surchargeName]?.updatedData ?? arrangedForTable,
            originalValidFrom: formatDateForPicker(data[SURCHARGE.CREATE_DATE]),
            validFrom: formatDateForPicker(data[SURCHARGE.CREATE_DATE]),
            newValidFrom: TODAY,
          };
        }
      )
    );
  },
  updateRow: (surchargeName, newRow) => {
    const editableKeys = get().surchargesDict[surchargeName].editableKeys;
    const reviewedRow = validateRow(newRow, editableKeys);
    
    set(
      produce(
        state => {
          const index = state.surchargesDict[surchargeName]['updatedData'].findIndex(r => r.id === reviewedRow.id);
          state.surchargesDict[surchargeName]['updatedData'][index] = reviewedRow;
        }
      )
    );
  },
  goBackToDate: (value, surchargeName) => {
    set(
      produce(
        state => {
          state.surchargesDict[surchargeName]['validFrom'] = value;
        }
      )
    );
  },
  reset: (surchargeName) => {
    set(
      produce(
        state => {
          state.surchargesDict[surchargeName] = {
            ...state.surchargesDict[surchargeName],
            ['validFrom']: state.surchargesDict[surchargeName]['originalValidFrom'],
            ['newValidFrom']: TODAY,
            updatedData: state.surchargesDict[surchargeName]['originalData']
          };
        }
      )
    );
  },
  setNewValidFrom: (value, surchargeName) => {
    
    set(
      produce(
        state => {
          state.surchargesDict[surchargeName]['newValidFrom'] = value;
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