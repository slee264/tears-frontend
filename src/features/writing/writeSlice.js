import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: null,
  operation: null,
  write: {title: '', body: ''},
  save_success: false,
}

export const writeModalSlice = createSlice({
  name: 'writeModal',
  initialState,
  reducers: {
    writeModal: (state, action) => {
      state.step = 'WRITE_EDIT_OPTIONS';

      if(action.payload.new_card){
        state.operation = 'add_new';
      }else{
        state.operation = 'patch';
        state.write = {title: action.payload.write.title, body: action.payload.write.body};
      }
    },
    saveSuccessModal: (state) => {
      state.save_success = true;
    },
    wipeModal: (state) => {
      return initialState;
    },
  }
})

export const { writeModal, wipeModal, saveSuccessModal } = writeModalSlice.actions

export default writeModalSlice.reducer
