import React from "react";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const AddCart = ({ productId, added }) => {
  const { addCart, carts } = useCartStore();
  const handleAddCartBtn = (event) => {
   event.stopPropagation(); // stop the parent element's click event from being triggered
    const newCart = {
      id: Date.now(),
      productId: productId,
      quantity: 1,
    };

    addCart(newCart);
  };
  const handleAddedBtn = (event) => {
    event.stopPropagation(); // stop the parent element's click event from being triggered
    toast.error("Item is already in My cart");
  };
  
  return added === true ? (
    <button onClick={handleAddedBtn} className="text-sm border border-black px-3 py-1 bg-black text-white ">
      Added
    </button>
  ) : (
    <button
      onClick={handleAddCartBtn}
      className="text-sm border border-black px-3 py-1"
    >
      Add Cart
    </button>
  );
};

export default AddCart;
