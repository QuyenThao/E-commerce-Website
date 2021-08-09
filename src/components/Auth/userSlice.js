import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import storageKeys from '../../constants/storage-keys';

export const register = createAsyncThunk('users/register', async (payload) => {
  const data = await userApi.register(payload);
  // save data to local storage
  localStorage.setItem(storageKeys.TOKEN, data.jwt);
  localStorage.setItem(storageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export const login = createAsyncThunk('users/login', async (payload) => {
  const data = await userApi.login(payload);
  // save data to local storage
  localStorage.setItem(storageKeys.TOKEN, data.jwt);
  localStorage.setItem(storageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: 'counter',
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
