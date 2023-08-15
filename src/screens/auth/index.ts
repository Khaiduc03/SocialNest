import {routes} from '../../constants';
import {Screen} from '../../types';
import CreateAccount from './create-account';
import LobbyScreen from './lobby';
import SignIn from './sign-in';
import UpdateProfile from './update-profile';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: SignIn,
  },
  {
    name: routes.CREATE_ACCOUNT,
    component: UpdateProfile,
  },
  {
    name: routes.LOBBY,
    component: LobbyScreen,
  },
  {
    name: routes.UPDATE_PROFILE,
    component: UpdateProfile,
  },
];
