export const INTERFACE_TYPES = {
  SALES_ONLINE: 1,
  VOLVO_SELECTED: 2
};

const { SALES_ONLINE, VOLVO_SELECTED } = INTERFACE_TYPES;

export const INTERFACES = {
  [SALES_ONLINE]: {
    label: 'Sales Online',
    value: 1,
    icon: 'explore',
    description: 'Platform for maintaining Interest Rate calculations for Norway'
  },
  [VOLVO_SELECTED]: {
    label: 'Volvo Selected',
    value: 2,
    icon: 'paid',
    description: 'Interest Rate Configurator'
  }
};