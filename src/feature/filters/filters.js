import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    onChangeLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { onChangeLocation } = filterSlice.actions;
export default filterSlice.reducer;
