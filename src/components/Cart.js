import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  console.log("Cart", cart.length);
  const dispatch = useDispatch();
  const handleClick = (food) => {
    dispatch(clearCart());
  };

  return (
    <div className="w-9/12 mx-auto">
      {cart.length === 0 ? (
        <div className="h-[80vh]">
        <EmptyCart />
        </div>
      ) : (
        <div className="flex justify-center">
          <h1 className="text-3xl text-center flex-1">Cart</h1>
          <button
            className="bg-slate-600 text-white rounded-lg p-2 cursor-pointer hover:bg-slate-700"
            onClick={handleClick}
          >
            Clear
          </button>
        </div>
      )}
      {cart.map((food) => {
        return (
          <div className="flex justify-between p-3">
            <div>
              <p className="text-xl">{food?.card?.info?.name}</p>
              <p className="text-xl">₹ {food?.card?.info?.price / 100}</p>
            </div>
            <img
              src={IMG_URL + food?.card?.info?.imageId}
              alt={food.card.info.name}
              className="w-20 h-auto"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
