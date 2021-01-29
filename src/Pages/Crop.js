import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navbarr from "../UI/Navbar";
import crop from "../assets/crop.gif";

class Crop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: {},
      temperature: "",
      area: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        "https://voice4rural-ml.herokuapp.com/crop/" +
          this.state.temperature +
          "/" +
          this.state.area
      )
      .then((res) => this.setState({ output: res.data }));
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { temperature, area, output } = this.state;
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
                <img src={crop} alt="vaccine" style={{ width: "60%" }} />
              </div>
            </Grid>

            <Typography component="h1" variant="h5">
              Crop Prediction
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
                    name="temperature"
                    value={temperature}
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Temperature (in Celsius)"
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
                    label="Area (in sq ft.)"
                    name="area"
                    value={area}
                    autoComplete="lname"
                    onChange={this.onChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="my-5"
              >
                Get results
              </Button>
            </form>
          </div>
          <Grid item xs={12} sm={10}>
            <h2>
              Ratio value:{" "}
              <span
                style={{
                  backgroundColor: "whitesmoke",
                  color: "green",
                  padding: "0.2em",
                  borderRadius: "20px",
                }}
              >
                <strong>{output.ratiovalue}</strong>
              </span>{" "}
            </h2>
            <h2 className="my-3">
              Production value:{" "}
              <span
                style={{
                  backgroundColor: "whitesmoke",
                  color: "green",
                  padding: "0.2em",
                  borderRadius: "20px",
                }}
              >
                <strong>{output.Productionvalue}</strong>
              </span>{" "}
            </h2>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Crop;
