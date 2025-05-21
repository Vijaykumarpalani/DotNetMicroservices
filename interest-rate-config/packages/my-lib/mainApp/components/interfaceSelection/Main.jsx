import React from 'react';
import { useMainAppStore } from '../../stores/zustand/mainApp.store';
import { mainAppSelector } from '../../stores/zustand/mainApp.selector';
import { INTERFACE_TYPES, INTERFACES } from '../../consts/app.consts';
import { InterfaceCard } from '../_common/surfaces/Card';
import { SalesOnline } from '../../../SalesOnline';
import { VolvoSelected } from '../../../VolvoSelected';
import { StyledCardsGallery } from '../_common/style';

const InterfaceSelection = () => {
  const choseInterface = useMainAppStore(mainAppSelector.choseInterface);
  
  return (
    <StyledCardsGallery>
      {Object.values(INTERFACES).map((interf) => (
        <InterfaceCard key={interf.value} card={interf} selectCard={choseInterface}/>
      ))}
    </StyledCardsGallery>
  );
};

export const Main = ({ state }) => {
  const selectedInterface = useMainAppStore(mainAppSelector.selectedInterface);
  
  const renderView = () => {
    switch (selectedInterface?.value) {
      case INTERFACE_TYPES.SALES_ONLINE:
        return <SalesOnline state={state}/>;
      case INTERFACE_TYPES.VOLVO_SELECTED:
        return <VolvoSelected state={state}/>;
      default:
        return <InterfaceSelection/>;
    }
  };
  
  return renderView();
};