import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShimmerUI from "./components/ShimmerUI";
import ResCard from "./components/ResCard";
import ResDetail from "./components/ResDetail";
import { API_URL } from "./utils/constants";
import "./index.css";
import useOnlineStatus from "./utils/useOnlineStatus";
import OnlineStatus from "./components/OnlineStatus";
import WhatsOnYourMind from "./components/WhatsOnYourMind";
import ResFilter from "./components/ResFilter";
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
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
    setFilteredRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setWhatsOnYourMind(
      response?.data?.cards[1]?.card?.card?.imageGridCards?.info
    );
  };
  if (!isOnline) return <OnlineStatus />;
  return (
    <div className="App ">
      {!restaurants || restaurants?.length === 0 ? (
        <div className="flex flex-wrap gap-5 mx-[10%]">
          <ShimmerUI />
        </div>
      ) : (
        <div className="w-8/12 m-auto">
          <ResFilter
            restaurants={restaurants}
            setFilteredRestaurants={setFilteredRestaurants}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <WhatsOnYourMind whatsOnYourMind={whatsOnYourMind} />

          <h5 className="text-3xl font-bold text-gray-600 pt-3">
            Top restaurant chains in Thiruvananthapuram
          </h5>
          {filteredRestaurants?.length === 0 && (
            <div className="flex justify-center items-center">
              <h3> No match found for "{searchTerm}"</h3>
              <img
                src="https://img.freepik.com/premium-vector/file-found-illustration-with-confused-people-holding-big-magnifier-search-no-result_258153-336.jpg"
                height="100px"
                alt="No match found"
              />
            </div>
          )}
          <div className="flex flex-wrap">
            {filteredRestaurants?.map((restaurant) => (
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
      )}
    </div>
  );
}
export default App;
