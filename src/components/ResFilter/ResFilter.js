import React, { useState } from "react";
import './ResFilter.css'
const ResFilter = ({ restaurants,  setFilteredRestaurants }) => {
  const handleFilter = () => {
    setFilteredRestaurants(restaurants.filter((res) => res.data.avgRating > 4));
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    const searchedRestaurant = restaurants.filter((res) =>
      res.data.name.toLowerCase().includes(searchTerm)
    );
    if (searchedRestaurant.length > 0) setFilteredRestaurants(searchedRestaurant);
  };
  return (
    <div className="filter-header ">
      <div>{restaurants?.length} Restaurants</div>
      <button className="btn-filter" onClick={handleFilter}>
        Top Rated
      </button>
      <div className="search-group">
        <input
          type="text"
          className="input-search"
          placeholder="Search for food"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-search" onClick={handleSearch}>
          Search
        </button>
      </div>
      <button className="btn-reset" onClick={handleFilter}>
        Reset
      </button>
    </div>
  );
};

export default ResFilter;
