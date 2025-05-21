export const selector = {
  originalTableData: (state) => state.originalTableData,
  updatedTableData: (state) => state.updatedTableData,
  originalCofConfiguration: (state) => state.originalCofConfiguration,
  updatedCofConfiguration: (state) => state.updatedCofConfiguration,
  setCofData: (state) => state.setCofData,
  cleanUp: (state) => state.cleanUp,
  updateRow: (state) => state.updateRow,
  reset: (state) => state.reset,
  goBackToDate: (state) => state.goBackToDate,
  setNewValidFrom: (state) => state.setNewValidFrom,
  validFrom: (state) => state.validFrom,
  newValidFrom: (state) => state.newValidFrom,
  updateCofBaseRate: (state) => state.updateCofBaseRate,
  rowsHaveChanged: (state) => {
    return state?.originalTableData.some((row, idx) => {
      return JSON.stringify(row) !== JSON.stringify(state.updatedTableData[idx]);
    });
  },
  cofGeneralDetails: (state) => state.cofGeneralDetails,
  updateCofConfiguration: (state) => state.updateCofConfiguration,
};
