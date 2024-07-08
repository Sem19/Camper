import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.items = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
