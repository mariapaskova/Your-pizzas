import React from "react";
import "./App.css";
import PizzaList from "./pages/pizzas/pizza-list";
import { Cart } from "./pages/cart/cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizzas">Pizzas</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <div>Homeeee</div>
        </Route>
        <Route path="/pizzas">
          <PizzaList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/pizzas/:id">
          <div>Should show pizza details</div>
        </Route>
        <Route path="*"></Route>
        {/* <NoMatch /> */}
      </Switch>
    </Router>
  );
}

export default App;
