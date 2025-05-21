import React, { useCallback } from 'react';
import { useCofStore } from '../../stores/zustand/stores/global.store';
import { cofSelector } from '../../stores/zustand/selectors/selectors';
import { StyledCofDashboard, StyledCofDashboardDetails } from './style';
import { StyledGroup, StyledLabel, StyledValue } from '../../../mainApp/components/_common/style';
import { COF_BASE_RATE, COF_CONFIGURATION } from '../../types/cof.types';
import { formatDateTimeForDisplay } from '../../utils/_common/date.util';
import { CofDashboardSubmit } from './CofDashboardSubmit';
import { UpdatableValue } from '../../../mainApp/components/_common/inputs/UpdatableValue';

export const CofDashboard = () => {
  const cofGeneralDetails = useCofStore(cofSelector.cofGeneralDetails);
  const updatedCofBaseRate = useCofStore(cofSelector.updatedCofConfiguration)?.[COF_CONFIGURATION.BASE_RATE]?.[COF_BASE_RATE.BASE_RATE];
  const updateCofBaseRate = useCofStore(cofSelector.updateCofBaseRate);
  const updatedPricingDecimals = useCofStore(cofSelector.updatedCofConfiguration)?.[COF_CONFIGURATION.PRICING_DECIMALS];
  const updateCofConfiguration = useCofStore(cofSelector.updateCofConfiguration);
  
  const handleChangeCofRate = useCallback((e) => {
    updateCofBaseRate(e.target.value);
  }, [updateCofBaseRate]);
  
  const handleChangeConfiguration = useCallback((e) => {
    updateCofConfiguration(COF_CONFIGURATION.PRICING_DECIMALS, e.target.value);
  }, [updateCofConfiguration]);
  
  if (!cofGeneralDetails) {
    return null;
  }
  
  return (
    <StyledCofDashboard>
      <StyledCofDashboardDetails>
        <StyledGroup>
          <StyledLabel>
            Currency
          </StyledLabel>
          <StyledValue>
            {cofGeneralDetails?.[COF_CONFIGURATION.CURRENCY]}
          </StyledValue>
        </StyledGroup>
        <StyledGroup>
          <StyledLabel>
            valid from
          </StyledLabel>
          <StyledValue>
            {formatDateTimeForDisplay(cofGeneralDetails?.[COF_CONFIGURATION.VALID_FROM])}
          </StyledValue>
        </StyledGroup>
        <StyledGroup>
          <StyledLabel>
            updated date
          </StyledLabel>
          <StyledValue>
            {formatDateTimeForDisplay(cofGeneralDetails?.[COF_CONFIGURATION.UPDATED_DATE])}
          </StyledValue>
        </StyledGroup>
        <StyledGroup>
          <StyledLabel>
            Created by
          </StyledLabel>
          <StyledValue>
            {cofGeneralDetails?.[COF_CONFIGURATION.USERNAME]}
          </StyledValue>
        </StyledGroup>
        <UpdatableValue
          label="base rate"
          value={updatedCofBaseRate}
          handleChange={handleChangeCofRate}
        />
        <UpdatableValue
          label="pricing decimals"
          value={updatedPricingDecimals}
          handleChange={handleChangeConfiguration}
        />
      </StyledCofDashboardDetails>
      <CofDashboardSubmit/>
    </StyledCofDashboard>
  );
};