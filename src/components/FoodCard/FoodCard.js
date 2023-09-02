import React from "react";
import "./FoodCard.css";
import { IMG_URL } from "../../utils/constants";

const FoodCard = ({ foods }) => {
  // console.log(foods);

  return foods?.card?.card?.itemCards?.map((food,index) => {
    return (
      <div className="food-details" key={index}>
        <div className="food-desc w-11/12">
          <h3>{food.card.info.name}</h3>
          <p>₹ {food.card.info.price / 100}</p>
          <p>{food.card.info.description}</p>
        </div>
        <div className="w-2/12  relative">
          {/* <div className=""> */}
            <button className="bg-white hover:bg-slate-50 text-green-500 shadow-md hover:shadow-xl  rounded-lg  p-1
            w-1/2 text-md absolute top-1/2 left-1/2 -translate-x-1/2">
              ADD
            </button>
          {/* </div> */}
          <img
            src={IMG_URL + food.card.info.imageId}
            alt={food.card.info.name}
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  });
};

export default FoodCard;
