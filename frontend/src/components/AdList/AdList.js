import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import {
  deleteAd,
  toggleFavorite,
  selectAds,
} from "../../redux/slices/adsSlice";
import {
  selectTitleFilter,
  selectPriceFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlices";
import "./AdList.css";

const AdList = () => {
  const ads = useSelector(selectAds);
  const titleFilter = useSelector(selectTitleFilter);
  const priceFilter = useSelector(selectPriceFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
  const dispatch = useDispatch();

  const handleDeleteAd = (id) => {
    dispatch(deleteAd(id));
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  const filteredAds = ads.filter((ad) => {
    const matchesTitle = ad.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    const matchesPrice = ad.price
      .toLowerCase()
      .includes(priceFilter.toLowerCase());

    const matchesFavorite = onlyFavoriteFilter ? ad.isFavorite : true;
    return matchesTitle && matchesPrice && matchesFavorite;
  });

  const highlightMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
  };

  return (
    <div className="app-block ad-list">
      <h2>Ad List</h2>
      {ads.length === 0 ? (
        <p>No ads available</p>
      ) : (
        <ul>
          {filteredAds.map((ad, i) => (
            <li key={ad.id}>
              <div className="ad-info">
                {++i}.{" "}
                <div>
                  <em>
                    <u>{highlightMatch(ad.title, titleFilter)}</u>
                  </em>{" "}
                </div>
                <div> {ad.description} </div>
                <div>
                  <strong>{highlightMatch(ad.price, priceFilter)}</strong>{" "}
                </div>
                <div> {ad.email} </div>({ad.source})
              </div>
              <div className="ad-actions">
                <span onClick={() => handleToggleFavorite(ad.id)}>
                  {ad.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>

                <button onClick={() => handleDeleteAd(ad.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdList;
