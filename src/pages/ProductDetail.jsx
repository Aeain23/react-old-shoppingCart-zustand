import React from "react";
import { useParams } from "react-router-dom";
// import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import AddCart from "../components/AddCart";
import BreadCrumb from "../components/BreadCrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const ProductDetail = () => {
  const { productSlug } = useParams();
  // console.log(productId);
  // console.log(useParams());
  const { products } = useProductStore();
  const { carts } = useCartStore();
  const currentProduct = products.find((product) => product.slug == productSlug);
  // console.log(currentProduct)
  return (
    <Container className="px-5">
      <BreadCrumb currentPageTitle="Product Detail" />
      <div className=" border border-black p-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className=" col-span-1">
            <img
              src={currentProduct.image}
              className="h-[200px] md:h-auto md:w-3/4 block mb-5 md:mb-0 md:mx-auto"
              alt=""
            />
          </div>
          <div className=" col-span-1 flex flex-col items-start gap-5">
            <h3 className=" text-3xl font-bold ">{currentProduct.title}</h3>
            <p className=" bg-gray-200 text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className=" flex justify-between w-full items-center">
              <p>Price : ({currentProduct.price}) </p>
              {carts.find((cart) => cart.productId === currentProduct.id) ? (
                <AddCart added={true} productId={currentProduct.id} />
              ) : (
                <AddCart added={false} productId={currentProduct.id} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
