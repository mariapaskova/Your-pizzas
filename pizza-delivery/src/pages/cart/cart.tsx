import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPizza } from "../../utils/api";
import { addToCart, removeFromCart } from "../../modules/cart.actions";

export function AddToCart({ pizza }: { pizza: IPizza }) {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-primary"
      onClick={() => dispatch(addToCart(pizza))}
    >
      Add to Cart
    </button>
  );
}

export function RemoveFromCart({ pizza }: { pizza: IPizza }) {
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-secondary"
      onClick={() => dispatch(removeFromCart(pizza))}
    >
      Remove from Cart
    </button>
  );
}

export function Cart() {
  const items = useSelector(getCart);

  return (
    <>
      <h2>Cart ({items.length})</h2>
      <ul>
        {items.map((item: { count: number; pizza: IPizza }) => (
          <li key={item.pizza.id}>
            {item.pizza.name} = {item.count}
            ($ {item.pizza.price * item.count})
            <RemoveFromCart pizza={item.pizza} />
          </li>
        ))}
      </ul>
    </>
  );
}

function getCart(store: any) {
  return store.cart.map((item: any) => ({
    count: item.count,
    pizza: store.pizzas.find((pizza: any) => pizza.id === item.pizzaId)
  }));
}
