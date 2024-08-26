import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'rahul',
  initialState: {
    value: '' // Initialize your state variable here
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = stateSlice.actions;
export default stateSlice.reducer;