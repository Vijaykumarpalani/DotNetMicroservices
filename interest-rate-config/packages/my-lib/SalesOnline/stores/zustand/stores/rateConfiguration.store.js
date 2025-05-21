import { produce } from 'immer';
import { RATE_CONFIGURATION } from '../../../types/rateConfigurations.types';

const initialState = {
  rateConfiguration: null
};


export const rateConfigurationStore = (set, get) => ({
  ...initialState,
  setRateConfiguration: (data) => {
    const clone = JSON.parse(JSON.stringify(data));
    clone[RATE_CONFIGURATION.CALCULATION_TYPE] = data[RATE_CONFIGURATION.CALCULATION_TYPE]?.toUpperCase();
    set(
      produce(
        state => {
          state.rateConfiguration = clone;
        }
      )
    );
  },
  cleanUp: () => {
    set(
      produce(() => initialState)
    );
  }
});