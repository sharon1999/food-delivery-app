import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShimmerUI from "./components/ShimmerUI/ShimmerUI";
import ResCard from "./components/ResCard";
import ResDetail from "./components/ResDetail";
import { API_URL } from "./utils/constants";
import "./index.css";
import useOnlineStatus from "./utils/useOnlineStatus";
import OnlineStatus from "./components/OnlineStatus";
import WhatsOnYourMind from "./components/WhatsOnYourMind";
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [whatsOnYourMind, setWhatsOnYourMind] = useState([]);
  const { isOnline } = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const response = await data.json();
    setRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log("Res", restaurants);

    setWhatsOnYourMind(
      response?.data?.cards[1]?.card?.card?.imageGridCards?.info
    );

  
  };
  if (!isOnline) return <OnlineStatus />;
  return (
      <div className="App">
        {/* Len{restaurants?.length} */}
        <WhatsOnYourMind whatsOnYourMind={whatsOnYourMind} />
        
        {restaurants?.length === 0 && <ShimmerUI />}
        <div className="res-container">
          {restaurants?.map((restaurant) => (
            <Link
              to={"res/" + restaurant.info.id}
              key={restaurant.info.id}
              element={<ResDetail />}
            >
              <ResCard restaurant={restaurant.info} />
            </Link>
          ))}
        </div>
      </div>
  );
}
export default App;
