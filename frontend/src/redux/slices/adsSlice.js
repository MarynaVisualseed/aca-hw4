import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    addAd: (state, action) => {
      state.push(action.payload);
    },
    deleteAd: (state, action) => {
      return state.filter((ad) => ad.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      state.forEach((ad) => {
        if (ad.id === action.payload) {
          ad.isFavorite = !ad.isFavorite;
        }
      });
    },
  },
});

export const { addAd, deleteAd, toggleFavorite } = adsSlice.actions;

export const selectAds = (state) => state.ads;

export default adsSlice.reducer;
