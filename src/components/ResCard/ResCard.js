import React from "react";
import { IMG_URL } from "../../utils/constants";
import "./ResCard.css";

export const ResCard = (props) => {
  const restaurant = props.restaurant;
  return (
    <div className="res-card">
      {restaurant.veg && <div className="absolute bg-green-400 text-slate-600 p-1 rounded-lg text-sm">Veg</div>}
      <img
        className="res-img"
        alt="Sample"
        src={`${IMG_URL}${restaurant.cloudinaryImageId}`}
      />
      <div className="card-title">{restaurant.name}</div>
      <div className="card-subtitle">{restaurant.locality}</div>
      <div className="res-card-footer">
        <div className="rating">{restaurant.avgRating}⭐</div>
        <div>{restaurant.costForTwo}</div>
      </div>
    </div>
  );
};

export default ResCard;
