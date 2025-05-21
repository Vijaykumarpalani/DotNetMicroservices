import { INTERFACE_TYPES } from './app.consts';

export const ACCESS_ROLES = {
  [INTERFACE_TYPES.SALES_ONLINE]: {
    READ: 'Read.SalesOnline',
    WRITE: 'Write.SalesOnline',
  },
  [INTERFACE_TYPES.VOLVO_SELECTED]: {
    READ: 'Read.VolvoSelected',
    WRITE: 'Write.VolvoSelected',
  }
};