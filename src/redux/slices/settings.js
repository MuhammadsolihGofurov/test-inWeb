import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  bars: false,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleLoadingFalse: (state, action) => {
      state.loading = false;
    },
    toggleLoadingTrue: (state, action) => {
      state.loading = true;
    },
    toggleBarsMenu: (state, action) => {
      state.bars = !state.bars;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleLoadingTrue, toggleLoadingFalse, toggleBarsMenu } = settingsSlice.actions

export default settingsSlice.reducer