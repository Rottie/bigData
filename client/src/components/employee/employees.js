// ** users.js ** //
import React, { Component } from "react";
import axios from "axios";
import DataTable from "./data-table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class Users extends Component {
  //Build Logic
  constructor(props) {
    super(props);
    this.state = { employeesCollection: [] };
  }

  // Read All
  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/employees/" ||
          "https://enigmatic-ravine-47562.herokuapp.com/users"
      )
      .then((res) => {
        this.setState({ employeesCollection: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  dataTable() {
    return this.state.employeesCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />;
    });
  }

  render() {
    return (
      <div className="wrapper-users">
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>{this.dataTable()}</tbody>
          </table>
          <Button
            variant="success"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            <Link
              to="/dashboard"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large btn-flat waves-effect success white-text"
            >
              Back
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}
