import { configureStore } from '@reduxjs/toolkit';
import bicycleFormSlice from './bicycleFormSlice';
import { bicycleApi } from '../redux/bicycleApi';

const store = configureStore({
  reducer: {
    [bicycleApi.reducerPath]: bicycleApi.reducer,
    bicycleForm: bicycleFormSlice,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat([bicycleApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
