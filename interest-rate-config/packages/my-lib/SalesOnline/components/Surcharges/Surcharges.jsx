import React, { useCallback } from 'react';
import { SmallerLoader, StyledFlex } from 'vfs-data-portal-components';
import { useSurchargesList } from '../../stores/reactQuery/hooks/surcharges.hook';
import { RadioSelection } from '../../../mainApp/components/_common/inputs/RadioSelection';
import { SurchargeView } from './SurchargeView';
import { SURCHARGES_LIST, SURCHARGES_LIST_ITEM } from '../../types/surcharges.types';
import { useSurchargesStore } from '../../stores/zustand/stores/global.store';
import { surchargesSelector } from '../../stores/zustand/selectors/selectors';
import { StyledDashboardContainer } from '../../../mainApp/components/_common/style';

export const Surcharges = () => {
  const { data, isLoading } = useSurchargesList();
  const surchargeInView = useSurchargesStore(surchargesSelector.surchargeInView);
  const setSurchargeInView = useSurchargesStore(surchargesSelector.setSurchargeInView);
  
  const handleChange = useCallback((event) => {
    setSurchargeInView(event.target.value);
  }, [setSurchargeInView]);
  
  
  if (isLoading) {
    return <SmallerLoader/>;
  }
  
  return (
    <StyledDashboardContainer>
      <StyledFlex width="100%" align="flex-start" justify="space-between">
        <RadioSelection
          list={data?.[SURCHARGES_LIST.SURCHARGE_CONFIGURATION]}
          itemLabel={SURCHARGES_LIST_ITEM.NAME}
          value={surchargeInView}
          handleChange={handleChange}
        />
        {/*<SurchargeValidFrom surchargeInView={surchargeInView}/>*/}
      </StyledFlex>
      <SurchargeView surchargeInView={surchargeInView}/>
    </StyledDashboardContainer>
  );
};