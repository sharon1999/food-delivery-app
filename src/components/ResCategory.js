import React from "react";
import FoodCard from "./FoodCard/FoodCard";

const ResCategory = ({ food, viewAccordion, setShowIndex }) => {
  const handleAccordion = () => {
    setShowIndex();
  };
  console.log("Foodd",food);
  return (
    <>
      <div
        className="flex p-2 m-3 justify-between items-center cursor-pointer bg-slate-100"
        onClick={handleAccordion}
      >
        <h3>
          {food?.card?.title}({food?.card?.itemCards?.length})
        </h3>

        <span className="material-symbols-outlined text-3xl">
          {viewAccordion ? "expand_less" : "expand_more"}
        </span>
      </div>
      {viewAccordion && (
        <div>
          <FoodCard foods={food} key={food?.card?.title} />
        </div>
      )}
    </>
  );
};

export default ResCategory;
