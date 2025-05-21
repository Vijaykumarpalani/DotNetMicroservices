import { useAppStore, useInterestRateConfiguratorStore } from '../stores/zustand/stores/global.store';
import { appSelector, volvoSelectedSelector } from '../stores/zustand/selectors/selectors';
import LocalstorageUtil from '../utils/localstorage.util';

export const useCleanUp = () => {
  const cleanupApp = useAppStore(appSelector.cleanUp);
  const cleanupVolvoSelected = useInterestRateConfiguratorStore(volvoSelectedSelector.cleanup);
  
  const cleanUpStores = () => {
    cleanupApp();
    cleanupVolvoSelected();
    LocalstorageUtil.clearStorage();
  };
  
  return {
    cleanUpStores,
  };
};
