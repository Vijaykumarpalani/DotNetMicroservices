import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { appStore } from './app.store';
import { cofStore } from './cof.store';
import { surchargesStore } from './surcharges.store';
import { proformaStore } from './proforma.store';
import { rateConfigurationStore } from './rateConfiguration.store';

export const useAppStore = create(devtools((set, get) => ({
  ...appStore(set, get),
}), { name: 'vfs-interest-rate-config: app' }));

export const useCofStore = create(devtools((set, get) => ({
  ...cofStore(set, get),
}), { name: 'vfs-interest-rate-config: Cof' }));

export const useSurchargesStore = create(devtools((set, get) => ({
  ...surchargesStore(set, get),
}), { name: 'vfs-interest-rate-config: Surcharges' }));

export const useProformaStore = create(devtools((set, get) => ({
  ...proformaStore(set, get),
}), { name: 'vfs-interest-rate-config: Proforma' }));

export const useRateConfigurationStore = create(devtools((set, get) => ({
  ...rateConfigurationStore(set, get),
}), { name: 'vfs-interest-rate-config: Rate Configuration' }));