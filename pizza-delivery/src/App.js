import React from "react";
import "./App.css";
import PizzaList from "./pages/pizzas/pizza-list";
import { Cart } from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <PizzaList></PizzaList>
      <Cart />
    </div>
  );
}

export default App;
