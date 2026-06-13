import { configureStore } from "@reduxjs/toolkit";
import { adPlacementApi } from "./action/ad";

export const store = configureStore({
  reducer: {
    [adPlacementApi.reducerPath]: adPlacementApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adPlacementApi.middleware),
});