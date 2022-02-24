import React, { Component } from "react";

import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeePosition = this.onChangeEmployeePosition.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: "",
      email: "",
      position: "",
    };
  }

  // Read Specific
  componentDidMount() {
    axios
      .get("http://localhost:5000/employees/edit/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          position: res.data.position,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeEmployeeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeEmployeePosition(e) {
    this.setState({ position: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const employeeObject = {
      name: this.state.name,
      email: this.state.email,
      position: this.state.position,
    };
    // Update Specific
    axios
      .put(
        "http://localhost:5000/employees/update/" + this.props.match.params.id,
        employeeObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
    // Redirect to Student List
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit || this.onSubmit}>
          <div className="form-group">
            <label>Enter Name</label>
            {/* add  create name variable */}
            {/* add update name variable */}
            <input
              type="text"
              value={this.state.name}
              onChange={this.onChangeEmployeeName}
              className="form-control"
            />
          </div>

          {/* -----------------------------Email */}
          <div className="form-group">
            <label>Enter Email</label>
            {/* add  create name variable */}
            {/* add update name variable */}
            <input
              type="text"
              value={this.state.email}
              onChange={this.onChangeEmployeeEmail}
              className="form-control"
            />
          </div>

          {/* Position */}
          <div className="form-group">
            <label>Enter Position</label>
            {/* add  create Postion variable */}
            {/* add update Position variable */}
            <input
              type="text"
              value={this.state.position}
              onChange={this.onChangeEmployeePosition}
              className="form-control"
            />
          </div>

          <Button variant="success" size="lg" block="block" type="submit">
            Update Employee
          </Button>

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
        </form>
      </div>
    );
  }
}
