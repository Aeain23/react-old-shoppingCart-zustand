import { create } from "zustand";
import carts from "../data/carts";

const useCartStore = create((set) => ({
  carts: carts,
  
  addCart: (newCart) => set((state) => ({ carts: [...state.carts, newCart] })),
  increaseQuantity: (id) =>
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity - 1 } : cart
      ),
    })),
  removeCart: (id) =>
    set((state) => ({
      carts: state.carts.filter((cart) => cart.id !== id),
    })),
}));
export default useCartStore;
