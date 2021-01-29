import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navbarr from "../UI/Navbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      hashtag: "farmers",
    };
  }

  componentDidMount() {
    axios
      .get("https://voice4rural.herokuapp.com/tweethash/" + this.state.hashtag)
      .then((res) => this.setState({ tweets: res.data.tweets }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    axios
      .get("https://voice4rural.herokuapp.com/tweethash/" + this.state.hashtag)
      .then((res) => this.setState({ tweets: res.data.tweets }));
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { tweets, hashtag } = this.state;
    return (
      <>
        <Navbarr />
        <div id="google_translate_element"></div>
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
            <Typography component="h1" variant="h5">
              Twitter Based News
            </Typography>

            <form
              style={{ width: "100%" }}
              noValidate
              onSubmit={this.onSubmit}
              className="my-3"
            >
              <Grid container spacing={2}>
                <TextField
                  autoComplete="fname"
                  name="hashtag"
                  value={hashtag}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Search topic"
                  autoFocus
                  onChange={this.onChange}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "rgb(245, 0, 87)", color: "#fff" }}
                className="my-5"
              >
                get news
              </Button>
            </form>
          </div>
        </Container>
        <Grid container spacing={1} className="m-2">
          <Grid container item xs={12} spacing={3}>
            {tweets.map((tweet) => (
              <Card
                className="m-2"
                key={Math.random()}
                style={{ backgroundColor: "rgb(63, 81, 181)", color: "white" }}
              >
                <CardContent>
                  <p>{tweet}</p>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default News;
