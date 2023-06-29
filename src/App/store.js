import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.Slice";

const store = configureStore({ reducer: themeReducer });

console.log(store.getState());
export default store;
