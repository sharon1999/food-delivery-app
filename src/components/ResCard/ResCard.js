import React from "react";
import { IMG_URL } from "../../utils/constants";
import './ResCard.css'

export const ResCard = (props) => {
  const restaurant = props.restaurant;
  return (
      <div className="res-card">
        <img
          className="res-img"
          alt="Sample"
          src={`${IMG_URL}${restaurant.cloudinaryImageId}`}
        />
        <div className="card-title">{restaurant.name}</div>
        <div className="card-subtitle">{restaurant.locality}</div>
        <div className="res-card-footer">
          <div className="rating">{restaurant.avgRating}</div>
          <div>•</div>
          <div>{restaurant.slaString}</div>
          <div>•</div>
          <div>{restaurant.costForTwoString}</div>
        </div>
      </div>
  );
};

export default ResCard;
