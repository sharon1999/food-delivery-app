import React, { useState } from "react";

const ResFilter = ({ restaurants, setFilteredRestaurants,searchTerm,setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredList = restaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(e.target.value)
    );
    setFilteredRestaurants(filteredList);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="w-56 border rounded-md p-1"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default ResFilter;
