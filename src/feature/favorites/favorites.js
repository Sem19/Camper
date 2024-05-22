import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOfFavorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteItem: (state, action) => {
      state.listOfFavorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.listOfFavorites));
    },
    removeFavoriteItem: (state, action) => {
      state.listOfFavorites = state.listOfFavorites.filter((item) => item.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.listOfFavorites));
    },
  },
});

export const { addFavoriteItem, removeFavoriteItem } = favoritesSlice.actions;
export default favoritesSlice.reducer;
