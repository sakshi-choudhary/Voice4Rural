import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ToastContainer, toast } from "react-toastify";
import Grid from "@material-ui/core/Grid";
import "react-toastify/dist/ReactToastify.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbarr from "../../UI/Navbar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import vaccine from "../../assets/vaccine.gif";

class Vaccine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: {},
      date: "",
      name: "",
      members: "",
      phone: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, members, date, phone } = this.state;
    axios
      .get("https://voice4rural.herokuapp.com/vaccine")
      .then((res) => this.setState({ slots: res.data }))
      .catch(alert);
    axios.post("https://voice4rural.herokuapp.com/vaccine", {
      name,
      members,
      date,
      phone,
    });
    const notify = () =>
      toast.success("Thanks! you booked your slot successfully");
    notify();
  };

  render() {
    const { name, members, slots, date, phone } = this.state;
    return (
      <>
        <Navbarr />
        <Container
          component="main"
          maxWidth="md"
          style={{ boxShadow: "1px 1px 1px 1px lightgray" }}
          className="p-5 my-3"
        >
          <CssBaseline />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={6}>
              <div className="ml-5">
                <img src={vaccine} alt="vaccine" style={{ width: "50%" }} />
              </div>
            </Grid>
            <Typography component="h1" variant="h5">
              Book Your Vaccination Slot
            </Typography>
            <form
              style={{ width: "100%" }}
              noValidate
              onSubmit={this.onSubmit}
              className="my-3"
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="name"
                    value={name}
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Your Name"
                    autoFocus
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    type="number"
                    label="Total number of Members"
                    name="members"
                    value={members}
                    autoComplete="lname"
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    type="text"
                    label="Your Phone Number"
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Choose a Date </FormLabel>

                    <RadioGroup
                      name="dates"
                      //value={value}
                      //onChange={handleChange}
                    >
                      <FormControlLabel
                        //value="female"
                        control={<Radio />}
                        label="29/01/21"
                        value="29/01/21"
                        name="date"
                        onChange={this.onChange}
                      />
                      <FormControlLabel
                        //value="female"
                        control={<Radio />}
                        label="30/01/21"
                        value="30/01/21"
                        name="date"
                        onChange={this.onChange}
                      />
                      <FormControlLabel
                        //value="female"
                        control={<Radio />}
                        value="31/01/21"
                        label="31/01/21"
                        name="date"
                        onChange={this.onChange}
                      />
                      <FormControlLabel
                        //value="female"
                        control={<Radio />}
                        label="01/02/21"
                        value="01/02/21"
                        name="date"
                        onChange={this.onChange}
                      />
                      <FormControlLabel
                        //value="female"
                        control={<Radio />}
                        label="02/02/21"
                        value="02/02/21"
                        name="date"
                        onChange={this.onChange}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Book
              </Button>
            </form>
          </div>
          <ToastContainer />
        </Container>
      </>
    );
  }
}

export default Vaccine;
