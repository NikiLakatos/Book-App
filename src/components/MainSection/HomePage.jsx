import React from "react";
import { Link } from "react-router-dom";
import image from "../../assert/book.jpeg";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="homePageContent">
      <div className="textAndButtonContent">
        <h1 className="textContent">WELCOME TO THE BOOK APP</h1>
        <Link to="/dashboard">
          {" "}
          <button className="buttonContent">JOIN THE BOOKSLIST</button>{" "}
        </Link>
      </div>
      <div style={{ width: "50%" }}>
        <img
          src={image}
          alt="ceva"
          style={{ position: "relative", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
