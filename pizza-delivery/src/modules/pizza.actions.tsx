import { IPizza } from "../utils/api";

export const ACTION_GET = "pizzas/GET";

export function getPizza(pizza: IPizza) {
  return {
    type: ACTION_GET,
    payload: pizza
  };
}
