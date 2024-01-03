import { configureStore } from '@reduxjs/toolkit';
import bicycleFormSlice from './bicycleFormSlice';
import { bicycleApi } from '../redux/bicycleApi';
import { statsApi } from '../redux/statsApi';

const store = configureStore({
  reducer: {
    [bicycleApi.reducerPath]: bicycleApi.reducer,
    [statsApi.reducerPath]: statsApi.reducer,
    bicycleForm: bicycleFormSlice,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([bicycleApi.middleware, statsApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
