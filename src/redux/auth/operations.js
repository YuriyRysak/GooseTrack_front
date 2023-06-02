import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = '';

// Для токена, щоб завантажувати JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// щоб очистити токен
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  // credentials - відправляються дані з форми
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      // додаємо токен до запиту
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.message === `Email has already registered. Please log in`) {
        toast.error(`User with this email  already exist`);
      } else {
        toast.error(
          `Enter valid email: contain letter,at lest one '.' and @. Or valid password: min 6 numbers, at lest one letter. Or valid name:`,
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // додаємо токен до запиту
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error(`Email or Password is wrong`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

//  Get information about the current user
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // getState() повертає весь стан
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      // rejectWithValue() помилку повертаємо
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);
    try {
      const res = await axios.get('users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.patch('/users/update', userData);
      return res.data;
    } catch (error) {
      toast.error('Failed to update user');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


