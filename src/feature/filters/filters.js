import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [],
  type: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    onChangeLocation: (state, action) => {
      state.location = action.payload;
    },
    onChangeCampperType: (state, action) => {
      state.type = action.payload;
    },
    onChangeEquipment: (state, action) => {
      state.equipment = action.payload;
    },
  },
});

export const { onChangeLocation, onChangeCampperType, onChangeEquipment } = filterSlice.actions;
export default filterSlice.reducer;
