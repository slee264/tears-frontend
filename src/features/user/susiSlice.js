import { createSlice } from '@reduxjs/toolkit';

export const susiModalSlice = createSlice({
  name: 'susiModal',
  initialState: {
    step: null,
    operation: null,
  },

  reducers: {
    logInModal: (state) => {
      state.step = 'SIGNIN_OPTIONS';
      state.operation = 'login';
    },
    registerModal: (state) => {
      state.step = 'SIGNIN_OPTIONS';
      state.operation = 'register';
    },
    enterEmailModal: (state) => {
      state.step = 'ENTER_EMAIL';
      state.valid_email = null;
    },
    enterPasswordModal: (state, action) => {
      state.step = 'ENTER_PASSWORD';
      state.valid_email = action.payload.email;
    },
    enterNameModal: (state) => {
      state.step = 'ENTER_NAME';
    },
    signUpFinishModal: (state, action) => {
      state.step = 'SIGNUP_COMPLETE';
      state.name = action.payload.name;
    },
    wipeModal: (state) => {
      state.step = null;
      state.operation = null;
      state.valid_email = null;
      state.name = null;
    }
  },
})

export const { logInModal, registerModal, enterEmailModal, enterPasswordModal, enterNameModal, signUpFinishModal, wipeModal } = susiModalSlice.actions

export default susiModalSlice.reducer
