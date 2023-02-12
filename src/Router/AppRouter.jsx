import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from "../components/Login/Login"
import Register from "../components/Login/Register"
import Dashboard from "../pages/Dashboard"

// import { Switch } from "react-router";

// const AppRouter = () => (
//   <Switch>
//     <Route path="/login" component={Login} />
//     <Route path="/register" component={Register} />
//   </Switch>
// );

// export default AppRouter;

export default function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <Routes>
          <Route exact path="/" element={<Login/>} />          
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
      </Router>
  );
}