import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import susiModalSlice from './features/user/susiSlice';
import userSlice from './features/user/userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const userReducer_Persisted = persistReducer(
  persistConfig,
  userSlice
);

const combinedReducer = combineReducers({
  user: userReducer_Persisted,
  susiModal: susiModalSlice,
})

const store = configureStore({
  reducer: combinedReducer,
  middleWare: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store
