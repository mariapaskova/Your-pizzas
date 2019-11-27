import { IPizza } from "../../utils/api";
import React from "react";

export default function VoteButton({ pizza }: { pizza: IPizza }) {
  // { pizza }: { pizza: IPizza }
  // const dispatch = useDispatch();

  if (pizza.viewerLiked) {
    return (
      <button className="btn btn-warning" onClick={() => {}}>
        {pizza.likes}
      </button>
    );
  }
  return (
    <button className="btn btn-primary" onClick={() => {}}>
      {pizza.likes}
    </button>
  );
}
