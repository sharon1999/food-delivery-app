import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex-col text-center">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" 
      className="w-[50vh] h-auto m-5 mx-auto"/>
      <p className="text-lg text-black font-bold p-3">Your cart is empty</p>
      <p className="text-md  p-3">You can go to homepage to view more restaurants</p>
      <button className="bg-orange p-3 rounded-lg m-5">BROWSE RESTAURANTS</button>
    </div>
  );
};

export default EmptyCart;
