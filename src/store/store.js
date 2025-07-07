import { configureStore } from "@reduxjs/toolkit";
import sign from "./sign";
import menu from "./dropMenu";
const store = configureStore({
  reducer: {
    sign,
    menu,
  },
});

export default store;
