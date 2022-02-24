// ** create-user.js ** //
import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);

    // Step 1 bind
    this.onChangeEmployeePosition = this.onChangeEmployeePosition.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Step 2 State
    this.state = {
      name: "",
      email: "",
      position: "",
    };
  }

  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeEmployeeEmail(e) {
    this.setState({ email: e.target.value });
  }

  // Step 3 target value
  onChangeEmployeePosition(e) {
    this.setState({ position: e.target.value });
  }

  // Step 4 onSubmit
  onSubmit(e) {
    e.preventDefault();
    const employeeObject = {
      name: this.state.name,
      email: this.state.email,
      position: this.state.position,
    };
    axios
      .post(
        "http://localhost:5000/employees/create" ||
          "https://enigmatic-ravine-47562.herokuapp.com/users/create",
        employeeObject
      )

      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // Step 5 setState
    this.setState({ name: "", email: "", position: "" });
  }

  // ---------------------------------Build UI
  render() {
    return (
      <div className="wrapper">
        {/* one form create users */}
        {/* add submit value */}
        {/* -------------------------------Name */}
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
              type="email"
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

          <Button
            variant="success"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Create Employee
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
