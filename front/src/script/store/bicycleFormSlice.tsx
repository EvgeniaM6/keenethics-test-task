import { createSlice } from '@reduxjs/toolkit';
import { FormValues } from '../models';

const initialState: FormValues = {
  id: '',
  name: '',
  type: '',
  color: '',
  wheelSize: '',
  price: '',
  description: '',
};

const bicycleFormSlice = createSlice({
  name: 'bicycleForm',
  initialState,
  reducers: {
    setBicycleFormValues(state, action) {
      return { ...state, ...(action.payload as FormValues) };
    },
  },
});

export const { setBicycleFormValues } = bicycleFormSlice.actions;
export default bicycleFormSlice.reducer;
