const express = require("express");
const cors = require("cors");
const adsData = require("./data/ads.json");

const app = express();

app.use(cors());

app.get("/random-ad", (req, res) => {
  const randomIndex = Math.floor(Math.random() * adsData.length);
  const randomAd = adsData[randomIndex];
  res.json(randomAd);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
