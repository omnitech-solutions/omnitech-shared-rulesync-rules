import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type UiState = {
  selectedTaxId: number | null;
};

const initialState: UiState = {
  selectedTaxId: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    selectTax(state, action: PayloadAction<number | null>) {
      state.selectedTaxId = action.payload;
    },
  },
});

export const { selectTax } = uiSlice.actions;
export default uiSlice.reducer;
