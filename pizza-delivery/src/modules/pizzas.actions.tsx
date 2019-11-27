import { IPizza } from "../utils/api";

export const ACTION_FETCH = "pizzas/FETCH";
export const ACTION_UPVOTE = "pizzas/upvote";
export const ACTION_DOWNVOTE = "pizzas/downvote";

export function fetchPizzas(pizzas: IPizza[]) {
  return {
    type: ACTION_FETCH,
    payload: pizzas
  };
}

export function upvote(pizza: IPizza) {
  return {
    type: ACTION_UPVOTE,
    payload: pizza
  };
}

export function downvote(pizza: IPizza) {
  return {
    type: ACTION_DOWNVOTE,
    payload: pizza
  };
}
