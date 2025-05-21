import { produce } from 'immer';
import { authSalesOnline } from '../../../utils/security/security.util';
import { decodeToken } from '../../../../mainApp/utils/utils';
import { ACCESS_ROLES } from '../../../../mainApp/consts/access.consts';
import { INTERFACE_TYPES } from '../../../../mainApp/consts/app.consts';

const authorizationTypes = ACCESS_ROLES[INTERFACE_TYPES.VOLVO_SELECTED];

const initialState = {
  auth: null,
  finishedAuth: false,
  authorizedRead: true,
  authorizedWrite: true,
  accessRoles: []
};

export const appStore = (set, get) => ({
  ...initialState,
  authenticate: async () => {
    const auth = get().auth;
    if (!auth) {
      const res = await authSalesOnline();
      const decoded = decodeToken(res.token);
      if (res.account) {
        set(
          produce(
            state => {
              state.auth = res.account;
              state.finishedAuth = true;
              state.accessRoles = decoded?.roles;
              state.authorizedRead = decoded?.roles?.includes(authorizationTypes.READ);
            }
          )
        );
      }
      return res;
    }
  },
  setAuthorization: ({ type, value }) => {
    set(
      produce(
        state => {
          state[type] = value;
        }
      )
    );
  },
  cleanUp: () => {
    console.log('cleaning up');
    set(
      produce(() => initialState)
    );
  }
});