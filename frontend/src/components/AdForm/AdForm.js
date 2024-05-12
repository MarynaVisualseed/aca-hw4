import { useState } from "react";
import { useDispatch } from "react-redux";
//import axios from "axios";
import createAdWithID from "../../utils/createAdWithID";
import { addAd } from "../../redux/slices/adsSlice";
//import adsData from "../../data/ads.json";
import "./AdForm.css";

const AdForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  // const handleAddRandomAd = () => {
  //   const randomIndex = Math.floor(Math.random() * adsData.length);
  //   const randomAd = adsData[randomIndex];
  //   dispatch(addAd(createAdWithID(randomAd, "random")));

  // const randomAdWithId = createAdWithID(randomAd);
  // dispatch(addAd(randomAdWithId));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && price) {
      dispatch(
        addAd(createAdWithID({ title, description, price, email }, "manual"))
      );
      //const ad = createAdWithID({ title, description, price });
      // dispatch(addAd(ad));
      setTitle("");
      setPrice("");
      setDescription("");
      setEmail("");
    }
  };

  // const handleAddRandomAdViaAPI = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:4000/random-ad");
  //     if (res.data && res.data.title && res.data.price) {
  //       dispatch(addAd(createAdWithID(res.data, "API")));
  //     }
  //   } catch (error) {
  //     console.log("Error fetching random ad", error);
  //   }
  // };

  return (
    <div className="app-block ad-form">
      <h2>Add a New Ad</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Add Ad</button>
        {/* <button type="button" onClick={handleAddRandomAd}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomAdViaAPI}>
          Add Randon via API
        </button> */}
      </form>
    </div>
  );
};

export default AdForm;
