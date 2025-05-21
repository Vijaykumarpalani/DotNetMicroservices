import React from 'react';
import { useLoadCof } from '../../stores/reactQuery/hooks/cof.hook';
import { StyledCofWrapper } from './style';
import { CofTable } from './CofTable';
import { CofDashboard } from './CofDashboard';
import { useAppStore } from '../../stores/zustand/stores/global.store';
import { appSelector } from '../../stores/zustand/selectors/selectors';
import { InsufficientRights } from '../error/InsufficientRights';

export const Cof = () => {
  const { isLoading } = useLoadCof();
  const authorizedRead = useAppStore(appSelector.authorizedRead);
  
  return (
    <StyledCofWrapper>
      {!authorizedRead ?
        <InsufficientRights/>
        :
        <>
          <CofTable isLoading={isLoading}/>
          <CofDashboard/>
          {/*{isFetched && <CofDashboardValidFrom/>}*/}
        </>
      }
    </StyledCofWrapper>
  );
};