import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  //Subscribing to the store using a selector
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  return (
    <div className="flex bg-b justify-between items-center mt-0 mb-4 p-2 shadow-md shadow-slate-200">
      <div className="left-nav">
        <Link to="/">
          <svg
            width="70"
            className="ml-[40%]"
            height="70"
            viewBox="0 0 41 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.26 4C34.74 4 36.0333 4.29333 37.14 4.88C38.2467 5.46667 39.1 6.29333 39.7 7.36C40.3133 8.41333 40.62 9.63333 40.62 11.02C40.62 12.3933 40.3133 13.6133 39.7 14.68C39.1 15.7467 38.24 16.5733 37.12 17.16C36.0133 17.7467 34.7267 18.04 33.26 18.04H28V4H33.26ZM33.04 15.08C34.3333 15.08 35.34 14.7267 36.06 14.02C36.78 13.3133 37.14 12.3133 37.14 11.02C37.14 9.72667 36.78 8.72 36.06 8C35.34 7.28 34.3333 6.92 33.04 6.92H31.42V15.08H33.04Z"
              fill="#E72452"
            />
            <path
              d="M9.14 4V6.74H3.42V9.7H7.7V12.36H3.42V18.04H0V4H9.14Z"
              fill="#E72452"
            />
            <path
              d="M12.405 11.2809C12.405 14.5239 14.8924 17.1586 18 17.2707C21.1076 17.1586 23.595 14.5239 23.595 11.2809C23.595 8.03824 21.1076 5.40274 18 5.29211C14.8924 5.40236 12.405 8.03786 12.405 11.2809Z"
              fill="#E72452"
            />
            <path
              d="M26.25 11.2813C26.25 6.72501 22.5562 3.03088 18 3.03088C13.4441 3.03088 9.75 6.72538 9.75 11.2813C9.75 15.8371 13.4441 19.5313 18 19.5313C22.5562 19.5313 26.25 15.8371 26.25 11.2813ZM12 11.2809C12 7.96701 14.5954 5.28051 17.7979 5.28051C17.8661 5.28051 17.9325 5.28988 18 5.29213C18.0675 5.28988 18.1342 5.28051 18.2021 5.28051C21.4046 5.28051 24 7.96738 24 11.2809C24 14.5948 21.4046 17.2809 18.2021 17.2809C18.1342 17.2809 18.0675 17.273 18 17.2711C17.9325 17.2734 17.8661 17.2809 17.7979 17.2809C14.5954 17.2805 12 14.5948 12 11.2809Z"
              fill="#E72452"
            />
            <path
              d="M27.5921 0.555535C27.945 0.645535 27.5962 0.82366 27.5962 0.82366C27.5962 0.82366 23.9437 0.88591 23.904 1.29091C23.8642 1.69591 27.6622 1.38391 27.735 1.86316C27.8059 2.30866 23.8436 2.05441 23.8837 2.46016C23.9265 2.86441 27.5775 2.93266 27.5775 2.93266C27.5775 2.93266 27.9259 3.11266 27.5756 3.20154C23.2594 4.29953 21.495 3.41116 21.495 3.41116C21.495 3.41116 21.1241 3.26116 21.1222 2.90491C21.1241 2.87154 10.8712 2.89666 9.49275 2.89441C8.82262 2.89516 8.84325 0.83191 9.51037 0.833035C10.8889 0.834535 21.1406 0.87466 21.1399 0.84241C21.1399 0.485035 21.5104 0.33541 21.5104 0.33541C21.5104 0.33541 23.2736 -0.54959 27.5921 0.555535ZM27.75 20.1077C27.7511 20.5719 26.3625 22.4979 21.2017 22.5002C19.5514 22.5024 19.5517 21.602 18.5194 21.6035C17.4889 21.605 9.29212 21.6107 9.29212 21.6107C9.29212 21.6107 8.61449 20.6229 9.32362 19.8887L27.6034 19.8752C27.603 19.8759 27.7504 19.8733 27.75 20.1077Z"
              fill="#E72452"
            />
          </svg>
        </Link>
      </div>

      <div className="flex gap-10 mr-5">
        <div className="icon flex flex-col items-center cursor-pointer">
          <span className="material-symbols-outlined font-extrabold">
            search
          </span>
          <div>Search</div>
        </div>

        <div className="icon flex flex-col items-center cursor-pointer relative">
          <Link to="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            <div>Cart</div>
          </Link>
          <span className="absolute -top-4 -right-1 bg-black text-white rounded-lg text-xs p-0.5">
            {cart.length}
          </span>
        </div>
        <div className="icon flex flex-col items-center cursor-pointer">
          <span className="material-symbols-outlined font-extrabold">
            person
          </span>
          <div> Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
