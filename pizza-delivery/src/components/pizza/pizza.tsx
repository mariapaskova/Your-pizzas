import React from "react";
import "./pizza.css";
import Button from "../button/button";

export default function Pizza({
  isHidden,
  name,
  likes,
  price,
  voteUnvote,
  hide
}: any) {
  return (
    <>
      {!isHidden && (
        <div className="listing">
          <Button onClick={voteUnvote}>Likes: {likes}</Button>
          <div>
            <div className="first-row">
              <div>{name}</div>
              <Button onClick={hide}>Hide</Button>
            </div>
            <div className="first-row">
              <div>Price: {price}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
