import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Search from "./Components/Search";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}
