export const mainAppSelector = {
  selectedInterface: (state) => state.selectedInterface,
  cleanUp: (state) => state.cleanUp,
  choseInterface: (state) => state.choseInterface,
  navItems: (state) => state.navItems,
  setNavItems: (state) => state.setNavItems,
  setCurrentView: (state) => state.setCurrentView,
  currentView: (state) => state.currentView,
  clearInterface: (state) => state.clearInterface,
};
