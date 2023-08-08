/* eslint-disable import/order */
import {PayloadAction} from '@reduxjs/toolkit';
import {LoginPayload, User} from '../types';
import {call, put, takeLatest} from 'redux-saga/effects';
import {AuthService} from '../services';
import {AuthActions, LoadingActions} from '../reducer';
import {ToastAndroid} from 'react-native';

//login
function* loginSaga(action: PayloadAction<LoginPayload>): Generator {
  // yield put(LoadingActions.showLoading());

  try {
    const {data}: any = yield call(AuthService.handleLogin, action.payload);
    if (data.code === 200) {
      yield put(
        AuthActions.handleLoginSuccess({
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
          enableSignIn: true,
        }),
      );
     
      ToastAndroid.show('Login success', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
      yield call(cleanUser);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

//clean user
function* cleanUser(): Generator {
  yield put(
    AuthActions.getUserInfoFailed({
      enableSignIn: false,
      accessToken: '',
      refreshToken: '',
      enableBiometric: false,
      user: {},
      isGoogle: false,
    }),
  );
}

export default function* watchAuthSaga() {
  yield takeLatest(AuthActions.handleLogin.type, loginSaga);

}
