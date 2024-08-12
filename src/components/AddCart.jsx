import React from "react";

const AddCart = ({added}) => {
  return (
    added === true?
    <button className="text-sm border border-black px-3 py-1 bg-black text-white ">
      Added
    </button>:
    <button className="text-sm border border-black px-3 py-1">
      Add Cart
    </button>
  );
};

export default AddCart;
