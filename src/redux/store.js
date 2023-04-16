import { configureStore } from '@reduxjs/toolkit'
import { settingsSlice } from './slices/settings'

export const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
  },
})