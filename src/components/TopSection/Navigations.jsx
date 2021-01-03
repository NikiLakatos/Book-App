import React from "react";
import "./Navigations.css";
import { Link } from "react-router-dom";

function NavigationsComponent() {
  return (
    <div className="contentNavBar">
      <div className="wholeTitle">
        <Link to="/dashboard">
          <button className="titleStyle">Overview Books</button>
        </Link>
      </div>
      <div className="wholeButton">
        <Link to="/">
          {" "}
          <button className="homePageButton">Home page</button>
        </Link>
        <Link to="/addBook">
          <button className="buttonStyle">Add book</button>
        </Link>
      </div>
    </div>
  );
}

export const Navigations = NavigationsComponent;
