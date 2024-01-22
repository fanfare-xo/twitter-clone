import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './modules/signup-slice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});
