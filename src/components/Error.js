import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("Err", error);
  return (
    <div id="main">
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">
          {error.status} : {error.statusText}
        </h1>
        <p className="font-mono text-base">{error.data}</p>
        <Link to="/" className="p-3 text-blue-400 underline hover:text-blue-700">Go back Home</Link>
      </div>
    </div>
  );
};

export default Error;
