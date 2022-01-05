import React from "react";
import "./styles.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Routes
} from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Search from "./Components/Search";

export default function App() {
  return (
    <div className="App">
      <h1>GITHUB SEARCH</h1>
      {/* <Login /> */}
      <Home />

      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route component={Login} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}
