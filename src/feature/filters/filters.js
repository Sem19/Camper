import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    onChangeLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleEquipment: (state, action) => {
      const equipmentValue = action.payload;
      if (state.equipment.includes(equipmentValue)) {
        state.equipment = state.equipment.filter((item) => item !== equipmentValue);
      } else {
        state.equipment.push(equipmentValue);
      }
    },
  },
});

export const { onChangeLocation, toggleEquipment } = filterSlice.actions;
export default filterSlice.reducer;
