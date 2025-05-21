import { produce } from 'immer';
import { create } from 'zustand';

const initialState = {
  selectedInterface: null,
  navItems: [],
  currentView: null
};

export const useMainAppStore = create((set) => ({
  ...initialState,
  choseInterface: chosenInterface => {
    set(
      produce(
        state => {
          state.selectedInterface = chosenInterface;
        }
      )
    );
  },
  clearInterface: () => {
    set(
      produce(
        state => {
          state.selectedInterface = null;
          state.currentView = null;
          state.navItems = [];
        }
      )
    );
  },
  setNavItems: interfaceNavItems => {
    set(
      produce(
        state => {
          state.navItems = interfaceNavItems;
          state.currentView = interfaceNavItems[0]?.value;
        }
      )
    );
  },
  setCurrentView: (viewValue) => {
    set(
      produce(
        state => {
          state.currentView = viewValue;
        }
      )
    );
  },
  cleanup: () => {
    set(
      produce(() => initialState),
    );
  }
}));

