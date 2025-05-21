export const selector = {
  auth: (state) => state.auth,
  finishedAuth: (state) => state.finishedAuth,
  authorizedRead: (state) => state.authorizedRead,
  authorizedWrite: (state) => state.authorizedWrite,
  accessRoles: (state) => state.accessRoles,
  authenticate: (state) => state.authenticate,
  setAuthorization: (state) => state.setAuthorization,
  cleanUp: (state) => state.cleanUp,
};
