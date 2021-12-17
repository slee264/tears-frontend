import { createSlice } from '@reduxjs/toolkit';

export const susiSlice = createSlice({
  name: 'susi',
  initialState: {
    operation: null,
  },

  reducers: {
    signInModal: (state) => {
      state.operation = 'signin'
    },
    signUpModal: (state) => {
      state.operation = 'signup'
    },
    wipeModal: (state) => {
      state.operation = null;
    }
  },
})

export const { signInModal, signOutModal, wipeModal } = susiSlice.actions

export default susiSlice.reducer
