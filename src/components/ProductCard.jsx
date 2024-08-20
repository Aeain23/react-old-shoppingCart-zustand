import React from "react";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import AddCart from "./AddCart";
import useCartStore from "../store/useCartStore";

const ProductCard = ({
  product: {
    id,
    title,
    slug, 
    price,
    image,
    rating: { rate },
  },
}) => {
  const { carts } = useCartStore();
  const navigate = useNavigate();
  const handleOpenDetail = () => {
    
    navigate(`product-detail/${slug}`);
  };
  return (
    <div
      onClick={handleOpenDetail}
      className=" border border-black p-5 flex flex-col  items-start gap-5"
    >
      <img src={image} className="h-40" alt="" />
      <p className=" font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className=" flex justify-between items-end w-full ">
        <p>{price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <AddCart added={true} productId={id} />
        ) : (
          <AddCart added={false} productId={id} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
