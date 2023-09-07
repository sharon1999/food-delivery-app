import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const [foodInfo, setFoodInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(MENU_API_URL + id);
      const response = await data.json();
      if (data.ok) {
        setResInfo(response?.data?.cards[0]?.card?.card);
        setFoodInfo(
          response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );
      } else {
        throw Error("Invalid URL");
      }
    };
    fetchData();
  }, [id]);

  return { resInfo, foodInfo };
};

export default useRestaurantMenu;
