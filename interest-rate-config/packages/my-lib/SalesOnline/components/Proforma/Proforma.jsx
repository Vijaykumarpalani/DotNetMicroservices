import React, { useCallback } from 'react';
import { SmallerLoader, StyledFlex } from 'vfs-data-portal-components';
import { useProformaStore } from '../../stores/zustand/stores/global.store';
import { proformaSelector } from '../../stores/zustand/selectors/selectors';
import { RadioSelection } from '../../../mainApp/components/_common/inputs/RadioSelection';
import { PROFORMA_LIST, PROFORMA_LIST_ITEM } from '../../types/proforma.types';
import { ProformaInView } from './ProformaInView';
import { useProformaList } from '../../stores/reactQuery/hooks/proforma.hook';
import { ProformaDetails } from './ProformaDetails';
import { StyledDashboardContainer } from '../../../mainApp/components/_common/style';

export const Proforma = () => {
  const { data, isLoading: loadingList } = useProformaList();
  const setProformaInView = useProformaStore(proformaSelector.setProformaInView);
  const proformaInView = useProformaStore(proformaSelector.proformaInView);
  
  const handleChange = useCallback((event) => {
    setProformaInView(event.target.value);
  }, [setProformaInView]);
  
  
  if (loadingList) {
    return <SmallerLoader/>;
  }
  
  return (
    <StyledDashboardContainer>
      <ProformaDetails/>
      <StyledFlex width="100%" align="flex-start" justify="space-between">
        <RadioSelection
          list={data[PROFORMA_LIST.SURCHARGES]}
          itemLabel={PROFORMA_LIST_ITEM.NAME}
          value={proformaInView}
          handleChange={handleChange}
        />
      </StyledFlex>
      <ProformaInView proformaInView={proformaInView}/>
    </StyledDashboardContainer>
  );
};