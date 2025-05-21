import React from 'react';
import { StyledHeader } from './style';
import { AppTitle, Paragraph } from 'vfs-data-portal-components';
import { useMainAppStore } from '../../stores/zustand/mainApp.store';
import { mainAppSelector } from '../../stores/zustand/mainApp.selector';

export const Header = () => {
  const selectedInterface = useMainAppStore(mainAppSelector.selectedInterface);
  
  return (
    <StyledHeader>
      <AppTitle>
        {selectedInterface?.label ?? 'Interest Rate Configurator'}
      </AppTitle>
      <Paragraph>
        {selectedInterface?.description ?? 'Platform for managing Interest Rate calculations'}
      </Paragraph>
    </StyledHeader>
  );
};