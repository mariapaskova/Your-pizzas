import { ACTION_GET } from "./pizza.actions";

export default function pizzaReducer(state = [], action: any) {
  if (action && action.type === ACTION_GET) {
    return action.payload;
  }

  return state;
}
