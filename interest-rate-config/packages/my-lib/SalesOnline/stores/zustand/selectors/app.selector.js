export const selector = {
  cleanUp: (state) => state.cleanUp,
  authenticate: (state) => state.authenticate,
  auth: (state) => state.auth,
  setAuthorization: (state) => state.setAuthorization,
  authorizedRead: (state) => state.authorizedRead,
  authorizedWrite: (state) => state.authorizedWrite,
  accessRoles: (state) => state.accessRoles,
  finishedAuth: (state) => state.finishedAuth,
};
