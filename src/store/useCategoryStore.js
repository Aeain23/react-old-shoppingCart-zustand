import { create } from "zustand";
import category from "../data/category";

const useCategoryStore = create((set)=>({
    categories: category, 
    activeCategory:(categoryId)=>set(((state)=>({
   categories: state.categories.map((category)=>(category.id === categoryId?{...category, isActive: true}:{...category, isActive: false}))
    })))


}));


export default useCategoryStore;