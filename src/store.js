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

import susiModalSlice from 'src/features/user/susiSlice';
import userSlice from 'src/features/user/userSlice';
import writeModalSlice from 'src/features/writing/writeSlice';
import talkSlice from 'src/features/talking/talkSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const userReducer_Persisted = persistReducer(
  persistConfig,
  userSlice
);

const talkReducer_Persisted = persistReducer(
  persistConfig,
  talkSlice
);

const combinedReducer = combineReducers({
  user: userReducer_Persisted,
  susiModal: susiModalSlice,
  writeModal: writeModalSlice,
  talkPage: talkReducer_Persisted,
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
