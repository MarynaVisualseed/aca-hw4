// AddAdsPage.js
import React from "react";
import { useDispatch } from "react-redux";
import { addAd } from "../../redux/slices/adsSlice";
import createAdWithID from "../../utils/createAdWithID";
import adsData from "../../data/ads.json";
import axios from "axios";
import "./AddAdsPage.css";

const AddAdsPage = () => {
  const dispatch = useDispatch();

  const handleAddRandomAd = () => {
    const randomIndex = Math.floor(Math.random() * adsData.length);
    const randomAd = adsData[randomIndex];
    dispatch(addAd(createAdWithID(randomAd, "request")));
  };

  const handleAddRandomAdViaAPI = async () => {
    try {
      const res = await axios.get("http://localhost:4000/random-ad");
      if (res.data && res.data.title && res.data.price) {
        dispatch(addAd(createAdWithID(res.data, "offer")));
      }
    } catch (error) {
      console.log("Error fetching random ad", error);
    }
  };

  return (
    <div className="app-block">
      <h2>Add Ads</h2>
      <button className="app-catalog" onClick={handleAddRandomAd}>
        All Request
      </button>
      <button className="app-catalog" onClick={handleAddRandomAdViaAPI}>
        All Offer
      </button>
    </div>
  );
};

export default AddAdsPage;
