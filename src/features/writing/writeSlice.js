import { createSlice } from '@reduxjs/toolkit';

export const writeModalSlice = createSlice({
  name: 'writeModal',
  initialState: {
    step: null,
    operation: null
  },

  reducers: {
    writeModal: (state, action) => {
      state.step = 'WRITE_EDIT_OPTIONS';

      if(action.payload.new_card){
        state.operation = 'add_new';
        state.write = {title: '', body: ''};
      }else{
        state.operation = 'patch';
        state.write = {title: action.payload.write.title, body: action.payload.write.body};
      }
    },
    wipeModal: (state) => {
      state.step = null;
    },
  }
})

export const { writeModal, wipeModal } = writeModalSlice.actions

export default writeModalSlice.reducer
