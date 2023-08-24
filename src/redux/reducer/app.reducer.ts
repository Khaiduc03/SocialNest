import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AppStatus} from '../types';
import {Redux} from '../types/redux.type';

const initialState: AppStatus = {
  isReady: false,
  isLoading: false,
};

const reducer = createSlice({
  name: Redux.app,
  initialState,
  reducers: {
    handleReady: (state: AppStatus, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isReady: action.payload,
      };
    },
    handleLoading: (state: AppStatus) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    handleOffLoading: (state: AppStatus) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

export const AppActions = reducer.actions;
export const AppReducer = reducer.reducer;
