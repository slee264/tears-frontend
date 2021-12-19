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
    enterEmailModal: (state) =>{
      state.step = 'ENTER_EMAIL';
    },
    wipeModal: (state) => {
      state.step = null;
      state.operation = null;
    }
  },
})

export const { logInModal, registerModal, enterEmailModal, wipeModal } = susiModalSlice.actions

export default susiModalSlice.reducer
