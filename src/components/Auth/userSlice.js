import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'counter',
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
});

const { reducer } = userSlice;
export default reducer;
