import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/navbar";
import Landing from "./components/layout/landing";
import Register from "./components/auth/register";
import Login from "./components/auth/login";

import CreateEmployee from "./components/employee/create-employee";
import Employees from "./components/employee/employees";
import EditEmployee from "./components/employee/edit-employee";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        {/* Navbar */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">Big Data ERP System</a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Create Page with inser link function */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/create-employee"}>
                    Create Employee
                  </Link>
                </li>

                {/* Read Page with inser link */}
                <li className="nav-item">
                  <Link className="nav-link" to={"/employees"}>
                    Employees List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/*Route  */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path="/" component={CreateEmployee} />
                <Route
                  exact
                  path="/create-employee"
                  component={CreateEmployee}
                />
                <Route
                  exact
                  path="/edit-employee/:id"
                  component={EditEmployee}
                />
                <Route exact path="/employees" component={Employees} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// Question 1: What is link in react
//Question 2:why switch route in app.js
