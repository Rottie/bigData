// Import router modules and components files
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateEmployee from "./components/employee/create-employee";
import Employees from "./components/employee/employees";
import EditEmployee from "./components/employee/edit-employee";
<Router>
  {/* Navbar */}
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">Big Data ERP System</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
          <Route path="/create-employee" component={CreateEmployee} />
          <Route path="/edit-employee/:id" component={EditEmployee} />
          <Route path="/employees" component={Employees} />
        </Switch>
      </div>
    </div>
  </div>
</Router>;
