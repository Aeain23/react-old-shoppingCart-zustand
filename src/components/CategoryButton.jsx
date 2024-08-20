import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryButton = ({category:{id, name, isActive}}) => {
 const {activeCategory} = useCategoryStore();
 const  handleClickBtn = ()=>{
    activeCategory(id);
  };
  return (
    <button
      
      onClick={handleClickBtn}
      className={`${
        isActive && "bg-black text-white"
      } border text-nowrap border-blue-400 px-4 py-2 me-2`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
