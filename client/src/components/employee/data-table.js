import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  deleteEmployee() {
    axios
      .delete("http://localhost:5000/employees/delete/" + this.props.obj._id)
      .then((res) => {
        console.log("User successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.position}</td>
        <td>
          <Button>
            <Link
              className="edit-link"
              to={"/edit-employee/" + this.props.obj._id}
            >
              Edit
            </Link>
          </Button>

          <Button onClick={this.deleteEmployee} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
