import React from "react";
import { IMG_URL } from "../utils/constants";
import { addItem, addQuantity, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const FoodItem = ({ food, index }) => {
  const {
    name,
    price,
    showImage,
    imageId,
    description,
    inStock,
    defaultPrice,
  } = food;
  //Dispatch an action onClick
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const foodItem = cart.items.find((element) => element.id === food.id);

  return (
    <div
      className="flex justify-between items-center m-5 border-b-2 p-2 pb-10"
      key={index}
    >
      <div className="flex-col justify-around w-11/12">
        <h3 className="text-base font-medium">{name}</h3>
        <p>₹ {price / 100}</p>
        <p className="font-extralight">{description}</p>
      </div>
      <div className="w-2/12  relative bg-blue-700 ">
        {foodItem ? (
          <div
            className="bg-white hover:bg-slate-50 text-green-500 shadow-md hover:shadow-xl  rounded-lg  p-1
            w-1/2 text-md absolute top-1/2 left-1/2 -translate-x-1/2 flex justify-between cursor-pointer"
          >
            <span
              className="material-symbols-outlined"
              onClick={() => dispatch(removeItem(food))}
            >
              remove
            </span>
            <button>{foodItem?.quantity}</button>
            <span
              className="material-symbols-outlined"
              onClick={() => dispatch(addQuantity(food))}
            >
              add
            </span>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addItem({ ...food, quantity: 1 }))}
            className="bg-white hover:bg-slate-50 text-green-500 shadow-md hover:shadow-xl  rounded-lg  p-1
            w-1/2 text-md absolute top-1/2 left-1/2 -translate-x-1/2"
          >
            ADD
          </button>
        )}
        {imageId !== undefined && (
          <img
            src={IMG_URL + imageId}
            alt={name}
            className="w-full h-auto rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default FoodItem;
