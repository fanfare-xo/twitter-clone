import { createSlice } from '@reduxjs/toolkit';

interface SignupState {
  isComplete: boolean;
}

const initialState: SignupState = {
  isComplete: false,
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    completeSignup: (state) => ({
      ...state,
      isComplete: !state.isComplete,
    }),
  },
});

export const { completeSignup } = signupSlice.actions;
export default signupSlice.reducer;
