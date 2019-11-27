import React from "react";
import "./pizza.css";
import Button from "../button/button";
import VoteButton from "../voteButton/voteButton";
import { IPizza } from "../../utils/api";
import { AddToCart } from "../../pages/cart/cart";

export default function Pizza({ pizza }: { pizza: IPizza }) {
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
      </div>
    </li>
  );
}
