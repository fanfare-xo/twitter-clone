import { createSlice } from '@reduxjs/toolkit';

interface OverlayState {
  isActive: boolean;
}

const initialState: OverlayState = {
  isActive: false,
};

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    toggleOverlay: (state) => ({
      ...state,
      isActive: !state.isActive,
    }),
  },
});

export const { toggleOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
