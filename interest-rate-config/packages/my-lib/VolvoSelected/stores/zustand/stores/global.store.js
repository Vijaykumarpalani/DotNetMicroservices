import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { appStore } from './app.store';
import { interestRateConfiguratorStore } from './interestRateConfigurator.store';

export const useAppStore = create(devtools((set, get) => ({
  ...appStore(set, get),
}), { name: 'vfs-irc-volvo-selected: app' }));

export const useInterestRateConfiguratorStore = create(devtools((set, get) => ({
  ...interestRateConfiguratorStore(set, get),
}), { name: 'vfs-irc-volvo-selected: volvoSelected' }));
