import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import userReducer from './features/user/userSlice';
import susiModalReducer from './features/user/susiSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default store = configureStore({
  reducer: {
    user: userReducer,
    susiModal: susiModalReducer,
  },
  middleWare: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
