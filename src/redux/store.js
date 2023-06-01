import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import { reviewsReducer } from './reviews/slice';
import { tasksReducer } from './tasks/slice';

const persistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const persistConfigTheme = {
  key: 'theme',
  version: 1,
  storage,
  whitelist: ['theme'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    tasks: tasksReducer,
    reviews: reviewsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
  floc: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);

