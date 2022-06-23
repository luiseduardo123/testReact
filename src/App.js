import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Uno from "./Uno";
import Dos from "./Dos";

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/parking">
          <Dos/>
        </Route>
        <Route path="/tiempo">
          <Uno/>
        </Route>
        <Route path="/">
          <div className="navMenu">
            <Link to="/tiempo">El tiempo por provincia</Link>
            <Link to="/parking">Parking</Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
