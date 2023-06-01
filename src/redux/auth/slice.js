import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, logIn, logOut, register } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isLoggedIn = false;
};

const initialState = {
  user: { name: null, email: null },
  userPhoto: null,
  usrPhone: null,
  userSkype: null,
  userBirthday: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.token = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected]: handleRejected,

    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.rejected]: handleRejected,

    [logOut.pending]: handlePending,
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.rejected]: handleRejected,

    [refreshUser.pending]: handlePending,
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.userPhoto = payload;
      state.usrPhone = payload;
      state.userSkype = payload;
      state.userBirthday = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = payload.isRefreshing;
      state.error = null;
    },
    [refreshUser.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
