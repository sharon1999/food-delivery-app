import React, { useState } from "react";
import "./ResFilter.css";
const ResFilter = ({ restaurants, setFilteredRestaurants }) => {
  const handleFilter = () => {
    setFilteredRestaurants(restaurants.filter((res) => res.data.avgRating > 4));
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    const searchedRestaurant = restaurants.filter((res) =>
      res.data.name.toLowerCase().includes(searchTerm)
    );
    if (searchedRestaurant.length > 0)
      setFilteredRestaurants(searchedRestaurant);
  };
  // console.log(restaurants);

  return (
    <div className="bg-slate-100 flex">
      <div className="flex flex-col pl-24 font-semibold ">
        <h5 className="text-xl pt-3">What's on your mind?</h5>
        <div className="flex justify-center">
          <img  className= "w-96 h-56 m-5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/917e3077ac860d71f580f344f2eccca7" />
          <img className= "w-96 h-56 m-5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/44e1fa728e6396b4ba03c15f59075cf8" />
          <img className= "w-96 h-56 m-5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/973d13462aab086e7db8f35595751839" />
        </div>
      </div>
    </div>
  );
};

export default ResFilter;
