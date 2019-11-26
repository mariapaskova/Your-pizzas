import React from "react";

export default function Button({ onClick, children }: any) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
}
