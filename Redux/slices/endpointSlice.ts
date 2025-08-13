import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IncomeEntry {
  name: string;
  income: number;
}

export interface Invoice {
  Amount: string;
  TransactionId: string;
  TransactionType: string;
  Date: string;
  Time: string;
  Status: string;
}

interface IncomeState {
  data: IncomeEntry[];
  invoiceData: Invoice[];
}

const initialState: IncomeState = {
  data: [],
  invoiceData: [],
};
const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    setIncomeData: (state, action: PayloadAction<IncomeEntry[]>) => {
      state.data = action.payload;
    },
    setInvoiceData: (state, action: PayloadAction<Invoice[]>) => {
      state.invoiceData = action.payload;
    },
  },
});

export const { setIncomeData, setInvoiceData } = incomeSlice.actions;
export default incomeSlice.reducer;
