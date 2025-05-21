import { RATE_CONFIGURATION_TYPE } from '../rateConfiguration/rateConfiguration.consts';
import { RateConfiguration } from '../../components/RateConfiguration/RateConfiguration';
import { Cof } from '../../components/Cof/Cof';
import { Surcharges } from '../../components/Surcharges/Surcharges';
import { Proforma } from '../../components/Proforma/Proforma';
import { Access } from '../../../mainApp/components/access/Access';

const {
  PROFORMA,
  COF
} = RATE_CONFIGURATION_TYPE;

export const APP_VIEWS = [
  {
    label: 'Rate Configuration',
    value: 1,
    icon: 'home',
    enabled: [PROFORMA, COF],
    Component: RateConfiguration
  },
  {
    label: 'Cost of Funds',
    value: 2,
    icon: 'payments',
    enabled: [PROFORMA, COF],
    Component: Cof
  },
  {
    label: 'Surcharges',
    value: 3,
    icon: 'attach_money',
    enabled: [PROFORMA, COF],
    Component: Surcharges
  },
  {
    label: 'Proforma Fees',
    value: 4,
    icon: 'paid',
    enabled: [PROFORMA],
    Component: Proforma
  },
  {
    label: 'Request access',
    value: 5,
    icon: 'lock',
    enabled: [PROFORMA, COF],
    Component: Access
  },
];
