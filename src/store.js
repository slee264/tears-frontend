import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import susiReducer from './features/user/susiSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    susi: susiReducer,
  },
})
