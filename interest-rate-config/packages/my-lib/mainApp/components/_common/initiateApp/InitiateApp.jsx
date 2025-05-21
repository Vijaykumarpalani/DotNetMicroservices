import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { LoadingMessage, PrimaryButton } from 'vfs-data-portal-components';
import { useMainAppStore } from '../../../stores/zustand/mainApp.store';
import { mainAppSelector } from '../../../stores/zustand/mainApp.selector';

export const InitiateApp = memo((props) => {
  const {
    cleanStores,
    authenticate,
    finishedAuth,
    dpState,
    setConfigs,
    appViews,
    auth,
    accessRoles,
    interfaceType
  } = props;
  const connectionSet = useRef(null);
  const currentView = useMainAppStore(mainAppSelector.currentView);
  const setNavItems = useMainAppStore(mainAppSelector.setNavItems);
  const [loading, setLoading] = useState(false);
  const [manualLoginNeeded, setManualLoginNeeded] = useState(false);
  
  useEffect(() => {
    (async () => {
      if (!connectionSet.current) {
        connectionSet.current = true;
        setLoading(true);
        setConfigs(dpState);
        const res = await authenticate();
        if (res?.error) {
          setManualLoginNeeded(true);
        } else {
          setNavItems(appViews);
        }
        setLoading(false);
        
      }
    })();
  }, [dpState]);
  
  useEffect(() => {
    return () => {
      if (cleanStores) {
        cleanStores();
      }
    };
  }, []);
  
  const renderView = useCallback(() => {
    const Component = appViews.find((item) => item.value === currentView)?.Component;
    return <Component auth={auth} accessRoles={accessRoles} interfaceType={interfaceType}/>;
  }, [currentView, appViews, accessRoles, auth, interfaceType]);
  
  const renderContent = () => {
    if (finishedAuth) {
      return renderView();
    }
    if (manualLoginNeeded) {
      return <PrimaryButton onClick={authenticate}>Login</PrimaryButton>;
    }
    return <LoadingMessage text="Accessing your rights" width="fit-content"/>;
  };
  
  return (
    <>
      {loading || !finishedAuth ?
        <LoadingMessage text="Accessing your roles" width="fit-content"/>
        :
        renderContent()
      }
    </>
  );
});