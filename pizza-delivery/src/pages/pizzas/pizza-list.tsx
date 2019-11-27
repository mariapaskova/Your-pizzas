import React from "react";
import { useDispatch, useSelector } from "react-redux";
import api, { IPizza } from "../../utils/api";
import Pizza from "../../components/pizza/pizza";
import { fetchPizzas } from "../../modules/pizzas.actions";

export default function PizzaList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    api.listPizzas().then((pizzas: any) => {
      dispatch(fetchPizzas(pizzas));
    });
  }, []);

  const pizzas: IPizza[] = useSelector((state: any) => state.pizzas);

  if (pizzas.length === 0) {
    return null;
  }

  return (
    <div>
      <ul>
        {pizzas.map(pizza => {
          return <Pizza pizza={pizza}></Pizza>;
        })}
      </ul>
    </div>
  );
}
