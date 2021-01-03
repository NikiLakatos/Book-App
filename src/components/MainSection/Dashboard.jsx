import React from "react";
import { BookList } from "./BookList";

function DashboardComponent() {
  return (
    <div style={{ display: "flex" }}>
      <BookList />
    </div>
  );
}

export const Dashboard = DashboardComponent;
