import React from "react";
// import "./FoodCard.css";
import FoodItem from "./FoodItem";

const FoodCard = ({ foods }) => {
  return foods?.card?.itemCards?.map((food, index) => {

    return <FoodItem food={food?.card?.info} key={index} />;
  });
};

export default FoodCard;
