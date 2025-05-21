import { useCallback } from 'react';
import { useCofStore } from '../../stores/zustand/stores/global.store';
import { cofSelector } from '../../stores/zustand/selectors/selectors';
import { prepareUpdatePayload } from '../../utils/cof/cof.util';
import { useLoadCof, useMutateCof } from '../../stores/reactQuery/hooks/cof.hook';

export const useCofSubmitHook = () => {
  const updatedCofConfiguration = useCofStore(cofSelector.updatedCofConfiguration);
  const updatedTableData = useCofStore(cofSelector.updatedTableData);
  const newValidFrom = useCofStore(cofSelector.newValidFrom);
  const { refetch } = useLoadCof();
  const { mutate, isPending } = useMutateCof(refetch);
  
  const handleSubmit = useCallback(async () => {
    const payload = prepareUpdatePayload({ cofConfiguration: updatedCofConfiguration, updatedTableData, newValidFrom });
    await mutate(payload);
  }, [updatedCofConfiguration, updatedTableData, newValidFrom]);
  
  return {
    handleSubmit,
    isPending
  };
};