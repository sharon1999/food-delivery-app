import React from "react";

const ResFilter = ({
  restaurants,
  setFilteredRestaurants,
  searchTerm,
  setSearchTerm,
}) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredList = restaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(e.target.value)
    );
    setFilteredRestaurants(filteredList);
  };
  const handleOptionChange = (e) => {
    const filterValue = e.target.value;
    switch (filterValue) {
      case "rating": {
        const data = [...restaurants];
        const result = data.sort(
          (item1, item2) => item2?.info?.avgRating - item1?.info?.avgRating
        );
        setFilteredRestaurants(result);
        break;
      }
      case "time": {
        const data = [...restaurants];
        const result = data.sort(
          (item1, item2) =>
            item1?.info?.sla?.deliveryTime - item2?.info?.sla?.deliveryTime
        );
        setFilteredRestaurants(result);
        break;
      }
      case "price": {
        const data = [...restaurants];
        const result = data.sort(
          (item1, item2) =>
            parseInt(item1?.info?.costForTwo.match(/\d+/)[0], 10) -
            parseInt(item2?.info?.costForTwo.match(/\d+/)[0], 10)
        );
        setFilteredRestaurants(result);
        break;
      }

      default:
        break;
    }
  };
  return (
    <div className="flex justify-between p-5">
      <input
        type="text"
        placeholder="Search"
        className="w-56 border rounded-md p-1"
        value={searchTerm}
        onChange={handleChange}
      />
      <div>
        <label className="p-1">Sort by</label>
        <select
          onChange={handleOptionChange}
          className="border-2 cursor-pointer"
          defaultValue="default"
        >
          <option disabled value="default">
            -- select an option --
          </option>
          <option value="rating">Rating</option>
          <option value="time">Delivery Time</option>
          <option value="price">Price</option>
        </select>
      </div>
    </div>
  );
};

export default ResFilter;
