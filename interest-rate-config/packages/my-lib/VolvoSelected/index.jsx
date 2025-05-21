import React from 'react';
import { _setConfigs } from './config/_setConfigs';
import { APP_VIEWS } from './consts/app.consts';
import { useAppStore } from './stores/zustand/stores/global.store';
import { appSelector } from './stores/zustand/selectors/selectors';
import { InitiateApp } from '../mainApp/components/_common/initiateApp/InitiateApp';
import { INTERFACE_TYPES } from '../mainApp/consts/app.consts';

export const VolvoSelected = ({ state }) => {
  const authenticate = useAppStore(appSelector.authenticate);
  const finishedAuth = useAppStore(appSelector.finishedAuth);
  const accessRoles = useAppStore(appSelector.accessRoles);
  const auth = useAppStore(appSelector.auth);
  
  return <InitiateApp
    authenticate={authenticate}
    finishedAuth={finishedAuth}
    dpState={state}
    setConfigs={_setConfigs}
    appViews={APP_VIEWS}
    accessRoles={accessRoles}
    auth={auth}
    interfaceType={INTERFACE_TYPES.VOLVO_SELECTED}
  />;
};