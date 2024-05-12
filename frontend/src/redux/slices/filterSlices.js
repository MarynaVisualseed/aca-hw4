import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  price: "",
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //   return { ...state, title: action.payload };
      state.title = action.payload;
    },

    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },

    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setPriceFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectPriceFilter = (state) => state.filter.price;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;
