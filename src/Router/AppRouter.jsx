import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from "../components/Login/Login"
import Register from "../components/Login/Register"
import Dashboard from "../pages/Dashboard"
import Post from "../components/Posts/Post"
import { removeToken } from "../services/auth";
// import { useNavigate } from "react-router";
// import PrivateRoute from "../Router/PrivateRouter"

// import { Switch } from "react-router";

// const AppRouter = () => (
//   <Switch>
//     <Route path="/login" component={Login} />
//     <Route path="/register" component={Register} />
//   </Switch>
// );

// export default AppRouter;

export default function AppRouter() {

  // const history = useNavigate();

  // const handelLogout = () => {
  //   dispatch({ type: "REMOVE_USER" });
  //   localStorage.removeItem("authToken")
  //   removeToken();
  //   history("/login")
  // }

  return (
      <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Londevs</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link"><Link to="/">Home</Link><span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to="/">Login</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to="/register">Register</Link></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          USERIFUSER
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" ><Link to="/">Login</Link></a>
          <a className="dropdown-item" >Register</a>
          <a className="dropdown-item" >Dashboard</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

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
          <li>
            <Link to="/post">Posts</Link>
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
          <Route path="/post" element={<Post/>} />
        </Routes>
      </div>
  );
}