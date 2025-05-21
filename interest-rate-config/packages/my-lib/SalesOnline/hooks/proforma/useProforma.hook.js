import { useCallback, useMemo } from 'react';
import { useProformaStore } from '../../stores/zustand/stores/global.store';
import { proformaSelector } from '../../stores/zustand/selectors/selectors';
import { createSurchargesPayload } from '../../utils/_common/_common.util';
import {
  useMutateProforma,
  useMutateProformaDetails,
  useProformaDetails
} from '../../stores/reactQuery/hooks/proforma.hook';
import { PROFORMA } from '../../types/proforma.types';
import { formatDateForDb } from '../../utils/_common/date.util';

export const useRowsHaveChanged = (proformaName) => {
  const proformaData = useProformaStore(proformaSelector.proformaDict)[proformaName];
  
  return proformaData.originalData.some((row, idx) => {
    return JSON.stringify(row) !== JSON.stringify(proformaData.updatedData[idx]);
  });
};

export const useProformaDetailsHaveChanged = () => {
  const originalProformaDetails = useProformaStore(proformaSelector.originalProformaDetails);
  const updatedProformaDetails = useProformaStore(proformaSelector.updatedProformaDetails);
  
  const detailsHaveChanged = useMemo(() => {
    if (!originalProformaDetails || !updatedProformaDetails) {
      return false;
    }
    return Object.keys(originalProformaDetails).some(
      key => originalProformaDetails[key] !== updatedProformaDetails[key]
    );
  }, [originalProformaDetails, updatedProformaDetails]);
  
  return detailsHaveChanged;
};

export const useSubmit = ({ proformaName, rowsHaveChanged, detailsHaveChanged }) => {
  const proformaData = useProformaStore(proformaSelector.proformaDict)[proformaName];
  const updatedProformaDetails = useProformaStore(proformaSelector.updatedProformaDetails);
  const { refetch } = useProformaDetails();
  const { mutate: mutateSurcharge, isPending: isPendingProformaConfig } = useMutateProforma(proformaName);
  const { mutate: mutateProformaDetails, isPending: isPendingProformaSurcharge } = useMutateProformaDetails(refetch);
  
  const handleSubmit = useCallback(async () => {
    const surchargePayload = createSurchargesPayload({
      raw: proformaData['raw'],
      updatedData: proformaData['updatedData'],
      relevantKeys: proformaData['editableKeys'],
      newValidFrom: proformaData['newValidFrom'],
    });
    
    if (rowsHaveChanged) {
      await mutateSurcharge(surchargePayload);
    }
    
    if (detailsHaveChanged) {
      await mutateProformaDetails(
        {
          ...updatedProformaDetails,
          [PROFORMA.VALID_FROM]: formatDateForDb(proformaData['newValidFrom'])
        }
      );
    }
  }, [proformaData, updatedProformaDetails, rowsHaveChanged, detailsHaveChanged]);
  
  return {
    handleSubmit,
    isPending: isPendingProformaSurcharge || isPendingProformaConfig,
  };
};