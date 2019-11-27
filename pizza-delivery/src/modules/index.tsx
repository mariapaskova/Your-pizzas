import pizzas from "./pizzas.reducer";
import cart from "./cart.reducer";
import { combineReducers } from "redux";

export default combineReducers({
  pizzas,
  cart
});
