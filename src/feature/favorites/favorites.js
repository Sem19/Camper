import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOfFavorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoriteItem: (state, action) => {
      state.listOfFavorites = action.payload;
    },
  },
});

export const { addFavoriteItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
