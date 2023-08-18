/* eslint-disable import/order */
import {PayloadAction} from '@reduxjs/toolkit';
import {LoginPayload, User} from '../types';
import {call, put, takeLatest} from 'redux-saga/effects';
import {AuthService} from '../services';
import {AuthActions, LoadingActions} from '../reducer';
import {ToastAndroid} from 'react-native';

import {DialogTitle} from '@rneui/base/dist/Dialog/Dialog.Title';
import {GoogleService} from '../../utils/google';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { ToastType } from '../../types';
import { NavigationService } from '../../navigation';
import { routes } from '../../constants';
import { showToastError, showToastSuccess } from '../../utils';



//login
function* loginSaga(action: PayloadAction<LoginPayload>): Generator {
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
      DialogTitle(data.message);
      yield call(cleanUser);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* loginGoogleSaga(
  action: PayloadAction<Omit<LoginPayload, 'password' | 'email'>>,
): Generator {
  //  yield put(LoadingActions.showLoading());
  try {
    yield GoogleService.logout();
    const checkLogin = yield GoogleService.checkSignIn();
    console.log(checkLogin);
    if (!checkLogin) {
      const {idToken}: any = yield GoogleService.login();
      console.log(idToken);
      const {data}: any = yield call(AuthService.hanleGGLogin, {
        device_token: action.payload.device_token,
        idToken,
      });
      console.log(data);
      if (data.code === 200) {
        yield put(
          AuthActions.handleLoginSuccess({
            accessToken: data.data.access_token,
            refreshToken: data.data.refresh_token,
            enableSignIn: true,
          }),
        );
        ToastAndroid.show('Login google success', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
        yield call(cleanUser);
      }
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

function* createAccountSaga(
  action: PayloadAction<Omit<LoginPayload, 'idToken' | 'device_token'>>,
): Generator {
try {
    const {data}: any = yield call(
      AuthService.handleCreateAccount,
      action.payload,
    );
    if (data.code === 200) {
      
      showToastSuccess(data.message);
      NavigationService.navigate(routes.UPDATE_PROFILE);

    } else {
      showToastError(data.message);
      yield call(cleanUser);
    }
  }
  catch (error: any) {
    console.log(error.message);
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
    }),
  );
}

export default function* watchAuthSaga() {
  yield takeLatest(AuthActions.handleLogin.type, loginSaga);
  yield takeLatest(AuthActions.handleLoginGoogle.type, loginGoogleSaga);
  yield takeLatest(AuthActions.handleCreateAccount.type, createAccountSaga);
}
