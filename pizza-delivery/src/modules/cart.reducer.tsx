import { ICartItem, CART_ADD, CART_REMOVE } from "./cart.actions";

type ICart = ICartItem[];

export default function cartReducer(state: ICart = [], action: any) {
  if (action.type === CART_ADD) {
    if (state.find((item: ICartItem) => item.pizzaId === action.payload)) {
      return state.map(item =>
        item.pizzaId === action.payload
          ? {
              ...item,
              count: item.count + 1
            }
          : item
      );
    } else {
      return [...state, { pizzaId: action.payload, count: 1 }];
    }
  }

  if (action.type === CART_REMOVE) {
    if (state.find(item => item.pizzaId === action.payload)) {
      return state
        .map((item: ICartItem) =>
          item.pizzaId === action.payload && item.count > 0
            ? {
                ...item,
                count: item.count - 1
              }
            : item
        )
        .filter((item: ICartItem) => item.count > 0);
    } else {
      return [...state];
    }
  }

  return state;
}
