import { IPizza } from "../../utils/api";
import React from "react";
import { useDispatch } from "react-redux";
import { downvote, upvote } from "../../modules/pizzas.actions";

export default function VoteButton({ pizza }: { pizza: IPizza }) {
  const dispatch = useDispatch();

  if (pizza.viewerLiked) {
    return (
      <button
        className="btn btn-warning"
        onClick={() => dispatch(downvote(pizza))}
      >
        {pizza.likes}
      </button>
    );
  }
  return (
    <button className="btn btn-primary" onClick={() => dispatch(upvote(pizza))}>
      {pizza.likes}
    </button>
  );
}
