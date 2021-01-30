import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export default class FormJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: "",
      designation: "",
      basesalary: "",
      location: "",
      workhours: "",
      contactNo: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      organisation,
      designation,
      basesalary,
      location,
      workhours,
      contactNo,
    } = this.state;

    axios.post("https://voice4rural.herokuapp.com/jobs", {
      organisation,
      designation,
      basesalary,
      location,
      workhours,
      contactNo,
    });
    const notify = () =>
      toast.success("Thanks! you posted the Job successfully");
    notify();
  };

  render() {
    const {
      organisation,
      designation,
      basesalary,
      location,
      workhours,
      contactNo,
    } = this.state;

    return (
      <form
        noValidate
        onSubmit={this.onSubmit}
        style={{
          width: "100%",
        }}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="item"
          label="Company Name"
          value={organisation}
          name="organisation"
          type="text"
          autoComplete="item"
          autoFocus
          onChange={this.onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          halfWidth
          required
          value={designation}
          name="designation"
          label="Job Role"
          type="text"
          id="margin-normal"
          autoComplete="number"
          className="mr-5"
          onChange={this.onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          halfWidth
          value={location}
          name="location"
          label="Location"
          type="text"
          id="margin-normal"
          autoComplete="number"
          className="mr-5"
          onChange={this.onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          halfWidth
          required
          value={basesalary}
          name="basesalary"
          label="Salary"
          type="number"
          id="margin-normal"
          autoComplete="number"
          onChange={this.onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          halfWidth
          required
          value={workhours}
          name="workhours"
          label="Work Hours"
          type="number"
          id="margin-normal"
          autoComplete="number"
          className="mr-5"
          onChange={this.onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          halfWidth
          required
          value={contactNo}
          name="contactNo"
          label="Contact Number"
          type="number"
          id="margin-normal"
          autoComplete="number"
          onChange={this.onChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="my-3"
        >
          Post
        </Button>
        <ToastContainer />
      </form>
    );
  }
}
