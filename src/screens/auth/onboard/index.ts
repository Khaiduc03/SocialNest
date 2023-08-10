import {routes} from '../../../constants';
import {Screen} from '../../../types';
import OnboardScreen from './Onboard';
import Onboard1 from './Onboard1';
import Onboard2 from './Onboard2';
import Onboard3 from './Onboard3';

export const onBroardScreens: Screen[] = [
  {
    name: routes.ONBOARD1,
    component: Onboard1,
  },
  {
    name: routes.ONBOARD2,
    component: Onboard2,
  },
  {
    name: routes.ONBOARD3,
    component: Onboard3,
  },
  {
    name: routes.ONBOARD,
    component: OnboardScreen,
  }
];
