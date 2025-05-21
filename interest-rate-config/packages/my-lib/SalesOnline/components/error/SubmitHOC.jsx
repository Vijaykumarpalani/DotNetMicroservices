import React from 'react';
import { InsufficientRights } from './InsufficientRights';
import { useAppStore } from '../../stores/zustand/stores/global.store';
import { appSelector } from '../../stores/zustand/selectors/selectors';
import { ACCESS_ROLES } from '../../../mainApp/consts/access.consts';
import { INTERFACE_TYPES } from '../../../mainApp/consts/app.consts';

const authorizationTypes = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];

export const withWriteCheck = (Component) => (props) => {
  const accessRoles = useAppStore(appSelector.accessRoles);
  
  if (!accessRoles.includes(authorizationTypes.WRITE)) {
    return <InsufficientRights message="Please request Write roles to change configurations."/>;
  }
  
  return <Component {...props}/>;
};