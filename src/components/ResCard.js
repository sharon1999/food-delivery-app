import React from "react";
import { IMG_URL } from "../utils/constants";
// import "./ResCard.css";

export const ResCard = (props) => {
  const restaurant = props.restaurant;
  return (
    <div
      className="m-4 p-5 w-52 h-56 cursor-pointer 
    hover: box-shadow: 0 4px 7px 0 rgba(108, 108, 109, 0.6) hover: shadow-[0_4px_7px_0_rgba(108,108,109,0.6)] hover:scale-[0.90]
    "
    >
      {restaurant.veg && (
        <div className="absolute bg-green-400 text-slate-600 p-1 rounded-lg text-sm">
          Veg
        </div>
      )}
      <img
        className="w-36 h-24"
        alt={restaurant.name}
        loading = "lazy"
        src={`${IMG_URL}${restaurant.cloudinaryImageId}`}
      />
      <div className="text-sm font-medium">{restaurant.name}</div>
      <div className="text-xs mt-1">{restaurant.locality}</div>
      <div className="res-card-footer">
        <div className="rating">{restaurant.avgRating}⭐</div>
        <div>{restaurant.costForTwo}</div>
      </div>
    </div>
  );
};

export default ResCard;
