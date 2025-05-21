import React from 'react';
import { appSelector } from './stores/zustand/selectors/selectors';
import { useAppStore } from './stores/zustand/stores/global.store';
import { APP_VIEWS } from './consts/_common/app.consts';
import { useCleanUpHook } from './hooks/_common/useCleanUp.hook';
import { _setConfigs } from './config/_setConfigs';
import { InitiateApp } from '../mainApp/components/_common/initiateApp/InitiateApp';
import { INTERFACE_TYPES } from '../mainApp/consts/app.consts';


export const SalesOnline = ({ state }) => {
  const finishedAuth = useAppStore(appSelector.finishedAuth);
  const authenticate = useAppStore(appSelector.authenticate);
  const auth = useAppStore(appSelector.auth);
  const accessRoles = useAppStore(appSelector.accessRoles);
  const { cleanUpStores } = useCleanUpHook();
  
  
  return <InitiateApp
    authenticate={authenticate}
    cleanStores={cleanUpStores}
    finishedAuth={finishedAuth}
    dpState={state}
    setConfigs={_setConfigs}
    appViews={APP_VIEWS}
    interfaceType={INTERFACE_TYPES.SALES_ONLINE}
    accessRoles={accessRoles}
    auth={auth}
  />;
};