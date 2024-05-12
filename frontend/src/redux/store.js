import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "./slices/adsSlice";
import filterReducer from "./slices/filterSlices";

const store = configureStore({
  reducer: {
    ads: adsReducer,
    filter: filterReducer,
  },
});

export default store;
