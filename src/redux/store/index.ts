import {combineReducers, configureStore} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {PersistConfig, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {Redux} from '../types/redux.type';
import {AuthReducer, LoadingReducer} from '../reducer';
import persistReducer from 'redux-persist/es/persistReducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../sagas';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: EncryptedStorage, // storage is now required
  timeout: 30000, // timeout for storage calls, default is 10000
  version: 1, // version - defaults to 1
  debug: true, // enable logs - default is false
  stateReconciler: autoMergeLevel2,
  whitelist: [Redux.auth],
  blacklist: [Redux.loading],
};

const rootReducers = combineReducers({
  auth: AuthReducer,
  loading: LoadingReducer,
});
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // to ignore redux-persist
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(RootSaga);
console.log(store.getState());
export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
