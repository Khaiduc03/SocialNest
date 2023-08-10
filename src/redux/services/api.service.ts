import axios from 'axios';
import {BASE_URL, Endpoints} from '../../environment';
import {store} from '../store';
import {AuthActions} from '../reducer';
import {ToastAndroid} from 'react-native';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiService.interceptors.request.use(
  config => {
    const accessToken = store.getState().auth.accessToken;
    if (accessToken && config.url !== Endpoints.REFRESH_TOKEN_ENDPOINT) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    config.withCredentials = true;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiService.interceptors.response.use(
  response => {
    console.log(`Call Api Successful  ${response.request.responseURL} `);
    return response;
  },
  async error => {
    //console.log(`Call Api Failed  ${error.request.responseURL} `);
    ToastAndroid.show('Call Api Failed', ToastAndroid.SHORT);
    const originalRequest = error.config;
    const refreshToken = store.getState().auth.refreshToken;

    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const res = await apiService.post(Endpoints.REFRESH_TOKEN_ENDPOINT, {
        refreshToken,
      });

      if (res.status === 200) {
        store.dispatch(AuthActions.refreshToken(res.data));
        return apiService(originalRequest);
      } else {
        store.dispatch(AuthActions.handleLogout());
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default apiService;
