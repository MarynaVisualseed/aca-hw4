import { v4 as uuidv4 } from "uuid";

const createAdWithID = (ad, source) => {
  return {
    ...ad,
    source,
    isFavorite: false,
    id: uuidv4(),
  };
};

export default createAdWithID;
