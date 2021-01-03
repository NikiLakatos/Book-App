import React, { useState, useContext } from "react";
import "./AddBook.css";
import { GlobalContext } from "../../contextApi/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";

export const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [price, setPrice] = useState(0);
  const { addBookNew } = useContext(GlobalContext);
  const history = useHistory();

  // const handleTitle = (e) => {
  //   setTitle(e.target.value);
  // };
  // const handleAuthor = (e) => {
  //   setAuthor(e.target.value);
  // };
  // const handlePages = (e) => {
  //   setPages(e.target.value);
  // };

  // const handlePrice = (e) => {
  //   setPrice(e.target.value);
  // };

  const onSubmitBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title,
      author,
      pages,
      price,
    };

    addBookNew(newBook); // Check this line.

    history.push("/dashboard");
  };

  return (
    <>
      <h1 style={{ color: "#FDF8F5", textAlign: "center" }}>Add new book</h1>
      <form onSubmit={console.log(onSubmitBook)}>
        <div>
          <label
            htmlFor="title"
            style={{ color: "#FDF8F5", marginRight: "1rem" }}
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="author"
            style={{ color: "#FDF8F5", marginRight: "1rem" }}
          >
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="pages"
            style={{ color: "#FDF8F5", marginRight: "1rem" }}
          >
            Page
          </label>
          <input
            type="number"
            min="0"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="price"
            style={{ color: "#FDF8F5", marginRight: "1rem" }}
          >
            Cost
          </label>
          <input
            type="number"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <button
            style={{ backgroundColor: "#FDF8F5", padding: "0.5rem 2rem" }}
          >
            Save
          </button>
          <Link to="/dashboard">
            <button
              style={{ backgroundColor: "#FDF8F5", padding: "0.5rem 2rem" }}
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};
