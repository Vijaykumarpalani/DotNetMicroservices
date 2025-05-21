export const selector = {
  account: (state) => state.account,
  setAccount: (state) => state.setAccount,
  cleanup: (state) => state.cleanup,
  setRows: (state) => state.setRows,
  originalRows: (state) => state.originalRows,
  updatedRows: (state) => state.updatedRows,
  latestValidFrom: (state) => state.latestValidFrom,
  updateRow: (state) => state.updateRow,
  rowsHaveChanged: (state) => {
    return state.originalRows.some((row, idx) => {
      return JSON.stringify(row) !== JSON.stringify(state.updatedRows[idx]);
    });
  },
  reset: (state) => state.reset,
  validFrom: (state) => state.validFrom,
  setValidFrom: (state) => state.setValidFrom,
  setUnauthorized: (state) => state.setUnauthorized,
  unauthorizedPermissions: (state) => state.unauthorizedPermissions,
  resetLoading: (state) => state.resetLoading,
};
