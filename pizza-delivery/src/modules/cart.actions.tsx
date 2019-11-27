import { IPizza } from "../utils/api";

export interface ICartItem {
  pizzaId: string;
  count: number;
}

export const CART_ADD = "cart/add";
export const CART_REMOVE = "cart/remove";

export function addToCart(pizza: IPizza) {
  return {
    type: CART_ADD,
    payload: pizza.id
  };
}

export function removeFromCart(pizza: IPizza) {
  return {
    type: CART_REMOVE,
    payload: pizza.id
  };
}
