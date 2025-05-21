import React from 'react';
import { LoadingMessage } from 'vfs-data-portal-components';
import { StyledRateConfiguration, StyledRateConfigurationWrapper } from './style';
import { useCofConfiguration } from '../../stores/reactQuery/hooks/rateConfiguration.hook';
import { StyledGroup, StyledLabel, StyledValue } from '../../../mainApp/components/_common/style';
import { RATE_CONFIGURATION } from '../../types/rateConfigurations.types';
import { useAppStore } from '../../stores/zustand/stores/global.store';
import { appSelector } from '../../stores/zustand/selectors/selectors';
import { InsufficientRights } from '../error/InsufficientRights';
import { ACCESS_ROLES } from '../../../mainApp/consts/access.consts';
import { INTERFACE_TYPES } from '../../../mainApp/consts/app.consts';

const authorizationTypes = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];


export const RateConfiguration = () => {
  const accessRoles = useAppStore(appSelector.accessRoles);
  const { isLoading, data, isFetched } = useCofConfiguration(accessRoles.includes(authorizationTypes.READ));
  
  if (!accessRoles.includes(authorizationTypes.READ)) {
    return <InsufficientRights message="Please request Read/Write roles to use this application."/>;
  }
  
  if (isLoading || !isFetched) {
    return <LoadingMessage text="Fetching configuration" width="fit-content"/>;
  }
  
  return (
    <StyledRateConfiguration>
      <StyledRateConfigurationWrapper>
        <StyledGroup>
          <StyledLabel>
            name
          </StyledLabel>
          <StyledValue>
            Sales Online
          </StyledValue>
        </StyledGroup>
        <StyledGroup>
          <StyledLabel>
            type
          </StyledLabel>
          <StyledValue>
            {data[RATE_CONFIGURATION.CALCULATION_TYPE]}
          </StyledValue>
        </StyledGroup>
      </StyledRateConfigurationWrapper>
    </StyledRateConfiguration>
  );
};