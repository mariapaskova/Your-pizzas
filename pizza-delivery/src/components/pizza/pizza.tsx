import React from "react";
import "./pizza.css";
import VoteButton from "../voteButton/voteButton";
import { IPizza } from "../../utils/api";
import { AddToCart } from "../../pages/cart/cart";
import { Link, useRouteMatch } from "react-router-dom";

export default function Pizza({ pizza }: { pizza: IPizza }) {
  let match = useRouteMatch();
  return (
    <li className="listing" key={pizza.id}>
      <VoteButton pizza={pizza}></VoteButton>
      <div>
        <div className="first-row">
          <div>
            {pizza.name} (${pizza.price}) Likes: {pizza.likes}
          </div>
        </div>
        <AddToCart pizza={pizza} />
        <Link to={`${match.url}/${pizza.id}`}>Pizza details</Link>
      </div>
    </li>
  );
}
