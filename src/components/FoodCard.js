import React from "react";
// import "./FoodCard.css";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const FoodCard = ({ foods }) => {
  //Dispatch an action onClick
  const dispatch = useDispatch();
  const handleClick = (food) => {
    dispatch(addItem(food));
  };

  return foods?.card?.itemCards?.map((food, index) => {
    return (
      <div className="flex justify-between m-5 border-b-2 p-2" key={index}>
        <div className="flex-col justify-around w-11/12">
          <h3 className="text-base font-medium">{food.card.info.name}</h3>
          <p>₹ {food.card.info.price / 100}</p>
          <p className="font-extralight">{food.card.info.description}</p>
        </div>
        <div className="w-2/12  relative">
          {/* <div className=""> */}
          <button
            className="bg-white hover:bg-slate-50 text-green-500 shadow-md hover:shadow-xl  rounded-lg  p-1
            w-1/2 text-md absolute top-1/2 left-1/2 -translate-x-1/2"
            onClick={() => handleClick(food)}
          >
            ADD
          </button>
          {/* </div> */}
          {food.card.info.imageId !== undefined && (
            <img
              src={IMG_URL + food.card.info.imageId}
              alt={food.card.info.name}
              className="w-full h-auto rounded-lg"
            />
          )}
        </div>
      </div>
    );
  });
};

export default FoodCard;
