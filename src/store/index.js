import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import favoriteReducer from "../feature/favorites/favorites";
import formReducer from "../feature/form/formSlice";
import { campperApi } from "../services/campper/campper";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    form: formReducer,
    [campperApi.reducerPath]: campperApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(campperApi.middleware),
});

setupListeners(store.dispatch);
