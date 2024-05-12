import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  setPriceFilter,
  setOnlyFavoriteFilter,
  resetFilters,
  selectTitleFilter,
  selectPriceFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlices";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const priceFilter = useSelector(selectPriceFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handlePriceFilterChange = (e) => {
    dispatch(setPriceFilter(e.target.value));
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={priceFilter}
            placeholder="Filter by price..."
            onChange={handlePriceFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
