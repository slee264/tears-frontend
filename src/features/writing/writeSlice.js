import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: null,
  operation: null,
  write: {title: '', body: ''},
  status: 'initial',
}

export const writeModalSlice = createSlice({
  name: 'writeModal',
  initialState,
  reducers: {
    writeModal: (state, action) => {
      state.step = 'WRITE_EDIT_OPTIONS';

      if(action.payload.new_card){
        state.operation = 'new';
      }else{
        state.operation = 'patch';
        state.write = action.payload.write;
      }
    },
    editWriteModal: (state) =>{
      state.status = 'edit';
    },
    saveWriteModal: (state) => {
      state.status = 'save';
    },
    wipeModal: (state) => {
      return initialState;
    },
  },

})

export const { writeModal, wipeModal, saveWriteModal, editWriteModal } = writeModalSlice.actions

export default writeModalSlice.reducer
