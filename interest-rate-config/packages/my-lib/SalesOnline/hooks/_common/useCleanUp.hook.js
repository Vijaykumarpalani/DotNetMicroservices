import {
  useAppStore,
  useCofStore,
  useProformaStore,
  useRateConfigurationStore,
  useSurchargesStore
} from '../../stores/zustand/stores/global.store';
import {
  appSelector,
  cofSelector,
  proformaSelector,
  rateConfigurationSelector,
  surchargesSelector
} from '../../stores/zustand/selectors/selectors';
import LocalstorageUtil from '../../utils/_common/localstorage.util';

export const useCleanUpHook = () => {
  const cleanupApp = useAppStore(appSelector.cleanUp);
  const cleanupCof = useCofStore(cofSelector.cleanUp);
  const cleanupSurcharges = useSurchargesStore(surchargesSelector.cleanUp);
  const cleanupProforma = useProformaStore(proformaSelector.cleanUp);
  const cleanupRateConfiguration = useRateConfigurationStore(rateConfigurationSelector.cleanUp);
  
  const cleanUpStores = () => {
    cleanupApp();
    cleanupCof();
    cleanupSurcharges();
    cleanupProforma();
    cleanupRateConfiguration();
    LocalstorageUtil.clearStorage();
  };
  
  return {
    cleanUpStores,
  };
};
