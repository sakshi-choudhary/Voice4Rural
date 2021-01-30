import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Component } from "react";

export default class FormMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: "",
      name: "",
      phone: "",
      price: "",
      location: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { seller, name, phone, price, location } = this.state;

    axios.post("https://voice4rural.herokuapp.com/market", {
      seller,
      name,
      phone,
      price,
      location,
    });
    const notify = () =>
      toast.success("Thanks! you posted the item succesfully");
    notify();
  };

  render() {
    const { seller, name, phone, price, location } = this.state;

    return (
      <form style={{ width: "100%" }} noValidate onSubmit={this.onSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="item"
          label="Item Name"
          name="name"
          value={name}
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
          name="seller"
          value={seller}
          label="Your Name"
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
          name="price"
          value={price}
          label="Price"
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
          name="phone"
          value={phone}
          label="Your Phone Number"
          type="number"
          id="margin-normal"
          autoComplete="number"
          onChange={this.onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          name="location"
          value={location}
          label="Location"
          type="text"
          id="margin-normal"
          autoComplete="number"
          onChange={this.onChange}
        />
        {/* <input
          name="file"
          type="file"
          className="file-upload my-3 ml-5 p-2"
          data-cloudinary-field="image_id"
          data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
        /> */}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="my-1 "
        >
          Sell
        </Button>
        <ToastContainer />
      </form>
    );
  }
}
