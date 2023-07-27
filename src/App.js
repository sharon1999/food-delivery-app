import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import ResFilter from "./components/ResFilter/ResFilter";
import ShimmerUI from "./components/ShimmerUI/ShimmerUI";
import ResCard from "./components/ResCard/ResCard";
import ResDetail from "./components/ResDetail/ResDetail";
import {API_URL} from "./config/constants";
import "./index.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filtereRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const response = await data.json();
    console.log("Res", response);
    setRestaurants(response?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(response?.data?.cards[2]?.data?.data?.cards);
  };
  return (
    <div className="App">
      <Header />
      <ResFilter
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      {restaurants.length === 0 && <ShimmerUI />}
      <div className="res-container">
        {filtereRestaurants.map((restaurant) => (
          <Link to="/res" element={<ResDetail />}>
            <ResCard key={restaurant.data.id} restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
