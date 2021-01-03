import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  books: JSON.parse(localStorage.getItem("books")) || [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(state.books));
  });

  function addBookNew(book) {
    dispatch({
      type: "ADD_BOOK",
      payload: book,
    });
    console.log("ceva");
  }

  return (
    <GlobalContext.Provider
      value={{
        books: state.books,
        addBookNew,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
