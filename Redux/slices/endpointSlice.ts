import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IncomeEntry {
  name: string;
  income: number;
}

interface IncomeState {
  data: IncomeEntry[];
}

const initialState: IncomeState = {
  data: [],
};
const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    setIncomeData: (state, action: PayloadAction<IncomeEntry[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setIncomeData } = incomeSlice.actions;
export default incomeSlice.reducer;
