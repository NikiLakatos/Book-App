import "./App.css";
import { BottomPage } from "./components/BottomSection/BottomPage";
import { Navigations } from "./components/TopSection/Navigations";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/MainSection/Dashboard";
import { AddBook } from "./components/MainSection/AddBook";
import { HomePage } from "./components/MainSection/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Navigations />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addBook" component={AddBook} />
        </Switch>
        <BottomPage />
      </Router>
    </div>
  );
}

export default App;
