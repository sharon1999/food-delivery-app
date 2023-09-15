import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addQuantity, removeItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  console.log("cart", cart);
  const dispatch = useDispatch();
  const handleClick = (food) => {
    dispatch(clearCart());
  };
  const total = cart.reduce((acc, curr) => {
    return acc + (curr.quantity * curr.price) / 100;
  }, 0);
  console.log("Tot", total);
  return (
    <div className="w-6/12 mx-auto h-[75vh] my-4 overflow-hidden">
      {cart.length === 0 ? (
        <div className="h-[80vh]">
          <EmptyCart />
        </div>
      ) : (
        <div className="flex justify-center p-10 bg-slate-300">
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
          <div className="flex justify-between p-3 bg-zinc-100 border-b relative">
            <div>
              <p className="text-xl">{food?.name}</p>
              <p className="text-xl">₹ {food?.price / 100}</p>
            </div>

            {food?.imageId !== undefined && (
              <img
                src={IMG_URL + food?.imageId}
                alt={food?.name}
                className="w-28 h-auto"
              />
            )}

            {food.quantity && (
              <div
                className="bg-white hover:bg-slate-50 text-green-500 shadow-md hover:shadow-xl  rounded-lg  p-1
            w-1/12 flex justify-between top-1/3 right-7 text-md absolute cursor-pointer"
              >
                <span
                  className="material-symbols-outlined"
                  onClick={() => dispatch(removeItem(food))}
                >
                  remove
                </span>
                <button>{food?.quantity}</button>
                <span
                  className="material-symbols-outlined"
                  onClick={() => dispatch(addQuantity(food))}
                >
                  add
                </span>
              </div>
            )}
          </div>
        );
      })}
      <div className="flex justify-center p-10 bg-slate-600">
        <h1 className="text-3xl text-white flex-1">Total</h1>
        <div
          className="bg-slate-600 text-white  text-4xl"
          onClick={handleClick}
        >
          ₹ {total}
        </div>
      </div>
    </div>
  );
};

export default Cart;
