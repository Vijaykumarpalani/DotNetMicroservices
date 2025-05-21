import { VolvoSelectedDisplay } from '../components/volvoSelected/VolvoSelectedDisplay';
import { Access } from '../../mainApp/components/access/Access';

export const APP_VIEWS = [
  {
    label: 'Rate Configuration',
    value: 1,
    icon: 'home',
    Component: VolvoSelectedDisplay
  },
  {
    label: 'Request access',
    value: 2,
    icon: 'lock',
    Component: Access
  },
];