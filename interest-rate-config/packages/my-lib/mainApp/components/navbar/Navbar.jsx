import React from 'react';
import { Chip, List } from '@mui/material';
import { StyledContent, StyledLogoWrapper, StyledNavbar } from './style';
import { Logo } from '../../assets/VolvoLogo';
import { useMainAppStore } from '../../stores/zustand/mainApp.store';
import { mainAppSelector } from '../../stores/zustand/mainApp.selector';
import { NavItem } from './NavItem';

export const Navbar = () => {
  const navItems = useMainAppStore(mainAppSelector.navItems);
  const clearInterface = useMainAppStore(mainAppSelector.clearInterface);
  const selectedInterface = useMainAppStore(mainAppSelector.selectedInterface);
  
  return (
    <StyledNavbar>
      <StyledLogoWrapper>
        <Logo/>
      </StyledLogoWrapper>
      <StyledContent>
        {!selectedInterface?.label ?
          <Chip label="No interface selected" variant="outlined"/>
          :
          <Chip
            label={selectedInterface?.label}
            onDelete={() => clearInterface()}
          />
        }
        <List>
          {navItems?.map((item, index) => (
            <NavItem key={index} item={item}/>
          ))}
        </List>
      </StyledContent>
    </StyledNavbar>
  );
};