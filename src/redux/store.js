import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: favoritesReducer,
  },
});
