// Import router modules and components files
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateEmployee from "./components/employee/create-employee";
import Employees from "./components/employee/employees";
import EditEmployee from "./components/employee/edit-employee";



 <Provider store={store}>
   <Router>
     <div className="App">
       <Navbar />
       <Route exact path="/" component={Landing} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/login" component={Login} />

       <Switch>
         <PrivateRoute exact path="/dashboard" component={Dashboard} />

         <PrivateRoute
           exact
           path="/create-employee"
           component={CreateEmployee}
         />
         <PrivateRoute
           exact
           path="/edit-employee/:id"
           component={EditEmployee}
         />
         <PrivateRoute exact path="/employees" component={Employees} />
       </Switch>
     </div>
   </Router>
 </Provider>;
