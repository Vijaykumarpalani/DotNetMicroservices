import { useSurchargesStore } from '../../stores/zustand/stores/global.store';
import { surchargesSelector } from '../../stores/zustand/selectors/selectors';
import { useCallback } from 'react';
import { useMutateSurcharge } from '../../stores/reactQuery/hooks/surcharges.hook';
import { createSurchargesPayload } from '../../utils/_common/_common.util';
import { SURCHARGE } from '../../types/surcharges.types';

export const useRowsHaveChanged = (surchargeName) => {
  const surchargeData = useSurchargesStore(surchargesSelector.surchargesDict)[surchargeName];
  
  return surchargeData?.originalData.some((row, idx) => {
    return JSON.stringify(row) !== JSON.stringify(surchargeData?.updatedData[idx]);
  });
};

export const useSubmit = (surchargeName) => {
  const surchargeData = useSurchargesStore(surchargesSelector.surchargesDict)[surchargeName];
  const { mutate, isPending } = useMutateSurcharge(surchargeName);
  
  const handleSubmit = useCallback(async () => {
    const isOpex = surchargeData['raw'][SURCHARGE.SURCHARGE_NAME].toLowerCase() === 'opex';
    const payload = createSurchargesPayload({
      raw: surchargeData['raw'],
      updatedData: surchargeData['updatedData'],
      relevantKeys: surchargeData['editableKeys'],
      newValidFrom: surchargeData['newValidFrom'],
      isOpex
    });
    await mutate(payload);
  }, [surchargeData]);
  
  return {
    handleSubmit,
    isPending
  };
};