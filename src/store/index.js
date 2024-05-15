import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import UrlReducer from "../feature/url";
import { campperApi } from "../services/campper/campper";

export const store = configureStore({
  reducer: {
    url: UrlReducer,
    [campperApi.reducerPath]: campperApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(campperApi.middleware),
});

setupListeners(store.dispatch);
