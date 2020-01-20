import React from "react";
import { useParams } from "react-router-dom";
import api, { IPizza } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getPizza } from "../../modules/pizza.actions";

export default function PizzaDetails() {
  let { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    api.getPizza(id!).then((pizza: any) => {
      dispatch(getPizza(pizza));
    });
  }, []);

  const pizza: IPizza = useSelector((state: any) => state.pizza);

  if (!pizza) {
    return null;
  }

  return (
    <li className="listing" key={id}>
      <div>
        <div className="first-row">
          Id: {id}
          <div> {pizza.name}</div>
          <div>Price: (${pizza.price})</div>
          <div>Likes: {pizza.likes}</div>
        </div>
      </div>
    </li>
  );
}
