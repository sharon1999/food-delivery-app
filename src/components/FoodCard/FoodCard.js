import React from "react";
import "./FoodCard.css";
import { IMG_URL } from "../../utils/constants";

const FoodCard = ({ foods }) => {
  console.log(foods);

  return foods?.card?.card?.itemCards?.map((food,index) => {
    return (
      <div className="food-details" key={index}>
        <div className="food-desc w-11/12">
          <h3>{food.card.info.name}</h3>
          <p>₹ {food.card.info.price / 100}</p>
          <p>{food.card.info.description}</p>
        </div>
        <div className="w-1/12">
          <div className="absolute">
            <button className="bg-slate-50 text-green-500 shadow-lg rounded-lg p-1 mx-8 my-2">
              ADD +
            </button>
          </div>
          <img
            src={IMG_URL + food.card.info.imageId}
            alt={food.card.info.name}
            className="w-32 h-auto"
          />
        </div>
      </div>
    );
  });
};

export default FoodCard;
