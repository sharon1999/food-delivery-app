import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResDetail = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();
  const { resInfo, foodInfo } = useRestaurantMenu(id);
  if (resInfo === null)
    return (
      <div className="flex flex-wrap gap-5 mx-[10%]">
        <ShimmerUI />
      </div>
    );

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
  } = resInfo?.info;
  const categories = foodInfo?.filter((food) => {
    return (
      food?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  // console.log("Categories", categories);

  return (
    <div className="details-container w-3/4 m-auto">
      {/* 1st section */}
      <div className="details-header flex justify-between p-3">
        <div className="left-header">
          <h1 className="res-name text-4xl text-gray-800">{name}</h1>
          <p className="res-cuisines">{cuisines.join(",")}</p>
          <p className="res-costfortwo">{costForTwoMessage}</p>
          <div className="res-eta">
            <div className="flex gap-2 items-center">
              <div className="res-time flex gap-2 items-center">
                <svg
                  className="res-svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    r="8.35"
                    transform="matrix(-1 0 0 1 9 9)"
                    stroke="#3E4152"
                    strokeWidth="1.3"
                  ></circle>
                  <path
                    d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                    fill="#3E4152"
                  ></path>
                </svg>
                <span className="res-avgtime">{sla.slaString}</span>
              </div>
              <div className="res-price flex gap-2 items-center">
                <svg
                  className="RestaurantTimeCost_icon__8UdT4"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8.25"
                    stroke="#3E4152"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                    fill="#3E4152"
                  ></path>
                </svg>
                <p className="res-costfortwo">{costForTwoMessage}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-right">
          <h1 className="res-avg-rating">⭐{avgRating}</h1>
          <p className="res-total-ratings">{totalRatingsString}</p>
        </div>
      </div>

      {/* Food Details */}
      <div className="w-full">
        {categories.map((food, index) => {
          return (
            <ResCategory
              food={food?.card}
              key={food?.card?.card?.title}
              viewAccordion={showIndex === index ? true : false}
              setShowIndex={() =>
                showIndex !== index ? setShowIndex(index) : setShowIndex(null)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResDetail;
