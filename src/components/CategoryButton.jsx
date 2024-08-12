import React from "react";

const CategoryButton = ({ categoryName, current }) => {
  return (
    <button
      className={`${
        current && "bg-black text-white"
      } border text-nowrap border-blue-400 px-4 py-2 me-2`}
    >
      {categoryName}
    </button>
  );
};

export default CategoryButton;
