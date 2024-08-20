import { create } from "zustand";
import products from "../data/products";

const useProductStore = create((set)=>({
    products:products
}));
export default useProductStore;