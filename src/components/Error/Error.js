import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <div id="main">
      <div className="fof">
        <h1>{error.status} : {error.statusText}</h1>
        <p>{error.data}</p>
      </div>
    </div>
  );
};

export default Error;
