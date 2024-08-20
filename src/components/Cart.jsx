import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();
  const product = products.find((prod) => prod.id === productId);
  const cost = product.price * quantity;
  const handleIncreaseBtn = () => {
    increaseQuantity(id);
  };
  const handleDecreaseBtn = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Item removed successfully");
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
         
        }
      }) 
    
    }
  };
  return (
    <div className=" border border-black p-5 grid grid-cols-6">
      <div className=" col-span-1">
        <img src={product.image} className=" h-16" alt="" />
      </div>
      <div className=" col-span-3">
        <p className=" mb-2">{product.title}</p>
        <p className=" text-gray-500">Price ({product.price})</p>
      </div>
      <div className=" col-span-1">
        <p className=" mb-2">Quantity</p>
        <div className=" flex gap-3">
          <button
            onClick={handleDecreaseBtn}
            className=" bg-black text-white px-2 py-0.5"
          >
            -
          </button>
          {quantity}
          <button
            onClick={handleIncreaseBtn}
            className=" bg-black text-white px-2 py-0.5"
          >
            +
          </button>
        </div>
      </div>
      <div className=" col-span-1">
        <p className=" text-end text-2xl font-bold mt-3">{cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
