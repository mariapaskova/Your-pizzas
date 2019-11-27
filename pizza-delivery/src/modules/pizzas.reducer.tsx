import { IPizza } from "../utils/api";
import { ACTION_FETCH, ACTION_UPVOTE, ACTION_DOWNVOTE } from "./pizzas.actions";

export default function pizzasReducer(state = [], action: any) {
  if (action && action.type === ACTION_FETCH) {
    return action.payload;
  }

  if (action && action.type === ACTION_UPVOTE) {
    return state.map((pizza: IPizza) =>
      pizza.id === action.payload.id
        ? {
            ...pizza,
            likes: pizza.likes + 1,
            viewerLiked: true
          }
        : pizza
    );
  }

  if (action && action.type === ACTION_DOWNVOTE) {
    return state.map((pizza: IPizza) =>
      pizza.id === action.payload.id
        ? {
            ...pizza,
            likes: pizza.likes - 1,
            viewerLiked: false
          }
        : pizza
    );
  }

  return state;
}
