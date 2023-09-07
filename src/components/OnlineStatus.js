import React from "react";
import logo from "../assets/offline.png";
const OnlineStatus = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <img src={logo} width={200} alt="sd" />
      <h1 className="text-4xl font-semibold p-8">Offline</h1>
      <p>
        You are currently offline. Please check your internet connection and try
        again.
      </p>
    </div>
  );
};

export default OnlineStatus;
