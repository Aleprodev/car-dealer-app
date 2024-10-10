import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionsState {
  vehicleMake: string | null;
  modelYear: string | null;
}

const initialState: OptionsState = {
  vehicleMake: null,
  modelYear: null,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setVehicleMake: (state, action: PayloadAction<string>) => {
      state.vehicleMake = action.payload;
    },
    setModelYear: (state, action: PayloadAction<string>) => {
      state.modelYear = action.payload;
    },
  },
});

export const { setVehicleMake, setModelYear } = optionsSlice.actions;

export default optionsSlice.reducer;
