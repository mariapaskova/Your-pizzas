import React from "react";
import DATA from "../../utils/api";
import Pizza from "../../components/pizza/pizza";

export default function PizzaList() {
  return (
    <div>
      {DATA.map(pizza => {
        return (
          <Pizza
            key={pizza.id}
            name={pizza.name}
            likes={pizza.likes}
            price={pizza.price}
          ></Pizza>
        );
      })}
    </div>
  );
}
