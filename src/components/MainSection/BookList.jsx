import React, { useContext } from "react";
import { GlobalContext } from "../../contextApi/GlobalState";
import { Book } from "./Book";

function BookListComponent() {
  const { books } = useContext(GlobalContext);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}

export const BookList = BookListComponent;
