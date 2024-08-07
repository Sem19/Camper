import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import favoriteReducer from "../feature/favorites/favorites";
import formReducer from "../feature/form/form-slice";
import cartReducer from "../feature/cart/cartSlice";
import FilterReducer from "../feature/filters/filters";
import { campperApi } from "../services/campper/campper";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    form: formReducer,
    filter: FilterReducer,
    cart: cartReducer,
    [campperApi.reducerPath]: campperApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(campperApi.middleware),
});

setupListeners(store.dispatch);
