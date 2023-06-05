import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, logIn, logOut, register, updateUser } from './operations';

const handlePending = state => {
  state.isRefreshing = true;
};
const handleRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
  state.isLoggedIn = false;
};

const initialState = {
  user: {
    username: null,
    email: null,
    avatarURL: null,
    phone: null,
    skype: null,
    birthday: null,
    token: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = {
          username: null,
          email: null,
          avatarURL: null,
          phone: null,
          skype: null,
          birthday: null,
          token: null,
        };
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, handleRejected)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
