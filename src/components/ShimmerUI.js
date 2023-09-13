import React from "react";
function ShimmerUI() {
  return [...Array(20)].map((ele, index) => {
    return (
      <div
        key={index}
        className="shimmer-ui animate-pulse w-64 h-48 bg-slate-200"
      >
        <div className="bg-slate-300 w-1/2 m-auto h-1/2 mt-[10%]"></div>
        <div className="bg-slate-400 w-1/3 ml-[25%] h-5 mt-2"></div>
      </div>
    );
  });
}

export default ShimmerUI;
