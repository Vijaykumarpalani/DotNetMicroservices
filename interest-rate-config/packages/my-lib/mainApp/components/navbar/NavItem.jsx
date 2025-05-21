import React from 'react';
import { mainAppSelector } from '../../stores/zustand/mainApp.selector';
import { useMainAppStore } from '../../stores/zustand/mainApp.store';
import { StyledListItem, StyledListItemIcon, StyledListItemText } from './style';

export const NavItem = ({ item }) => {
  const setCurrentView = useMainAppStore(mainAppSelector.setCurrentView);
  const currentView = useMainAppStore(mainAppSelector.currentView);
  
  const checkIfSelected = value => {
    return currentView === value;
  };
  
  const isSelected = checkIfSelected(item.value);
  
  const handleSelect = (view) => {
    setCurrentView(view.value);
  };
  
  return (
    <StyledListItem
      key={item.value}
      isselected={isSelected.toString()}
      onClick={() => handleSelect(item)}
    >
      <StyledListItemIcon>
        <i className="material-icons-outlined">{item.icon}</i>
      </StyledListItemIcon>
      <StyledListItemText isselected={isSelected.toString()}>
        {item.label}
      </StyledListItemText>
    </StyledListItem>
  );
};