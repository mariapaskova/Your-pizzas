import React from "react";
import "./pizza.css";
import Button from "../button/button";
import VoteButton from "../voteButton/voteButton";
import { IPizza } from "../../utils/api";

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
        <Button className="btn btn-primary" onClick={pizza}>
          Add to Cart
        </Button>
      </div>
    </li>
  );
}
