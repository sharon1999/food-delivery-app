import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResFilter from "./components/ResFilter/ResFilter";
import ShimmerUI from "./components/ShimmerUI/ShimmerUI";
import ResCard from "./components/ResCard/ResCard";
import ResDetail from "./components/ResDetail/ResDetail";
import {API_URL} from "./utils/constants";
import "./index.css";
import useOnlineStatus from "./utils/useOnlineStatus";
import OnlineStatus from "./components/OnlineStatus/OnlineStatus";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filtereRestaurants, setFilteredRestaurants] = useState([]);
  const {isOnline}=useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const response = await data.json();
    console.log("Res", response);
    setRestaurants(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  if(!isOnline) return <OnlineStatus />
  return (
    <div className="App">
      <ResFilter
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      {restaurants?.length === 0 && <ShimmerUI />}
      <div className="res-container">
        {filtereRestaurants?.map((restaurant) => (
          // console.log(restaurant)
          <Link to= {"res/"+restaurant.info.id} key={restaurant.info.id}element={<ResDetail />}>
            <ResCard  restaurant={restaurant.info} /> 
          </Link>
        ))}
      </div> 
    </div>
  );
}

export default App;
