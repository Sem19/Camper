import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
};

export const urlSlice = createSlice({
  name: "urlSlice",
  initialState,
  reducers: {
    updateUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { updateUrl } = urlSlice.actions;

export default urlSlice.reducer;
