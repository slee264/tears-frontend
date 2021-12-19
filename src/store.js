import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import susiModalReducer from './features/user/susiSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    susiModal: susiModalReducer,
  },
})
