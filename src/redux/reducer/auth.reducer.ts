import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types/redux.type';
import {AuthState, LoginPayload} from '../types/auth.type';

const initialState: AuthState = {
  enableSignIn: false,
  enableBiometric: false,
  accessToken: '',
  refreshToken: '',
  user: {},
  isGoogle: false,
};

const reducer = createSlice({
  name: Redux.auth,
  initialState,
  reducers: {
    //login
    handleLogin: (state: AuthState, _: PayloadAction<LoginPayload>) => {
      return {
        ...state,
      };
    },
    handleLoginSuccess: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    handleLoginFailed: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});


export const AuthAction = reducer.actions;
export const AuthReducer = reducer.reducer;