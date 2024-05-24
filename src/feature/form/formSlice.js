import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    data: {},
  },
  reducers: {
    saveFormData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { saveFormData } = formSlice.actions;

export default formSlice.reducer;
