import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AuthState, LoginPayload, RefreshToken, User} from '../types';
import {Redux} from '../types/redux.type';

const initialState: AuthState = {
  enableSignIn: false,
  enableBiometric: false,
  accessToken: '',
  refreshToken: '',
  user: {},
};

const reducer = createSlice({
  name: Redux.auth,
  initialState,
  reducers: {
    //login
    handleLogin: (
      state: AuthState,
      _: PayloadAction<Partial<LoginPayload>>,
    ) => {
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

    //login google
    handleLoginGoogle: (
      state: AuthState,
      _: PayloadAction<Omit<LoginPayload, 'password' | 'email'|'idToken'>>,
    ) => {
      return {
        ...state,
      };
    },
    //logout
    handleLogout: (state: AuthState) => {
      return {
        ...state,
        enableSignIn: false,
        accessToken: '',
        refreshToken: '',
        enableBiometric: false,
        user: Object.assign(initialState.user),
        isGoogle: false,
      };
    },

    //create account
    handleCreateAccount: (
      state: AuthState,
      _: PayloadAction<Omit<LoginPayload, 'device_token'>>,
    ) => {
      return {
        ...state,
      };
    },
    handleCreateAccountSuccess: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    handleCreateAccountFailed: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    //get user info
    getUserInfo: (state: AuthState) => {
      return {
        ...state,
      };
    },
    getUserInfoSuccess: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    getUserInfoFailed: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    toggleBiometric: (state: AuthState) => {
      return {
        ...state,
        enableBiometric: !state.enableBiometric,
      };
    },
    refreshToken: (state: AuthState, action: PayloadAction<RefreshToken>) => {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
    //update user
    updateUserAvatar: (state: AuthState, _: PayloadAction<FormData>) => {
      return {
        ...state,
      };
    },
    updateUserProfile: (
      state: AuthState,
      _: PayloadAction<
        Partial<
          Pick<
            User,
            'full_name' | 'summary' | 'address' | 'phone_number' | 'email'
          >
        >
      >,
    ) => {
      return {
        ...state,
      };
    },
  },
});

export const AuthActions = reducer.actions;
export const AuthReducer = reducer.reducer;
