import pizzas from "./pizzas.reducer";
import pizza from "./pizza.reducer";
import cart from "./cart.reducer";
import { combineReducers } from "redux";

export default combineReducers({
  pizzas,
  pizza,
  cart
});
