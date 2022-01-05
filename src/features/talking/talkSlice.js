import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  TALK_ID: null
}

export const talkSlice = createSlice({
  name: 'talkPage',
  initialState,
  reducers: {
    setTALK_ID: (state, action) => {
      state.TALK_ID = action.payload.talk_id;
    },

    removeTALK_ID: (state) => {
      return initialState;
    }
  },

})

export const { setTALK_ID, removeTALK_ID } = talkSlice.actions

export default talkSlice.reducer
