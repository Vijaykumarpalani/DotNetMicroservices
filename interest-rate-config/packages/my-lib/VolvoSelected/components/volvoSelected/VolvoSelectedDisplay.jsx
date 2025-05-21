import React from 'react';
import { LoadingMessage } from 'vfs-data-portal-components';
import { VolvoSelectedTable } from './VolvoSelectedTable';
import { useVolvoSelectedGetConfig } from '../../stores/reactQuery/hooks/volvoSelected.hook';
import { StyledVolvoSelected } from './style';
import { VolvoSelectedActions } from './VolvoSelectedActions';
import { useInterestRateConfiguratorStore } from '../../stores/zustand/stores/global.store';
import { volvoSelectedSelector } from '../../stores/zustand/selectors/selectors';
import { ACCESS_ROLE_TYPE_ENUM } from '../../types/volvoSelected/config.type';
import { InsufficientRights } from '../../../SalesOnline/components/error/InsufficientRights';

export const VolvoSelectedDisplay = () => {
  const { isFetched, isLoading } = useVolvoSelectedGetConfig();
  const unauthorizedRead = useInterestRateConfiguratorStore(volvoSelectedSelector.unauthorizedPermissions)[ACCESS_ROLE_TYPE_ENUM.READ];
  
  if (!!unauthorizedRead) {
    return <InsufficientRights/>;
  }
  
  return (
    <>
      {isLoading && <LoadingMessage text="Fetching Interest Rate" width="fit-content"/>}
      <StyledVolvoSelected>
        {isFetched && <VolvoSelectedTable/>}
        <VolvoSelectedActions/>
      </StyledVolvoSelected>
    </>
  );
};