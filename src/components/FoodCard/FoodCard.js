import React from "react";
import "./FoodCard.css";
import { IMG_URL } from "../../utils/constants";

const FoodCard = ({ food }) => {
  return (
    <div className="food-details">
      <div className="food-desc">
        <h3>{food.card.info.name}</h3>
        <p>₹ {food.card.info.price/100}</p>
        <p>{food.card.info.description}</p>
      </div>
      <img src={IMG_URL + food.card.info.imageId}  alt={food.card.info.name}/>
    </div>
  );
};

export default FoodCard;
