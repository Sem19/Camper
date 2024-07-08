import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [],
  type: "",
  transmission: "",
  price: [0, 100000],
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
    onChangeCampperTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    onChangeEquipment: (state, action) => {
      state.equipment = action.payload;
    },
    onChangePrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const {
  onChangeLocation,
  onChangeCampperType,
  onChangeEquipment,
  onChangeCampperTransmission,
  onChangePrice,
} = filterSlice.actions;
export default filterSlice.reducer;
