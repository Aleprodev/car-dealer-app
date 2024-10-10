import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/apiSlice';
import optionsReducer from './features/options/optionsSlice';

export const store = configureStore({
  reducer: {
    options: optionsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
