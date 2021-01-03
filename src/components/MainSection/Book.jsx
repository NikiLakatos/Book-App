import React, { useContext } from "react";
import { GlobalContext } from "../../contextApi/GlobalState";

function BookComponent({ book }) {
  return (
    <div>
      <li>{book.id}</li>
      <li>{book.title}</li>
      <li>{book.author}</li>
      <li>{book.pages}</li>
      <li>{book.price}</li>
    </div>
  );
}

export const Book = BookComponent;
