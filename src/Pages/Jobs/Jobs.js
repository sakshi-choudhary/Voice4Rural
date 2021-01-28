import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Badge, Collapse, Row, Col, Nav, Navbar } from "react-bootstrap";
import Navbarr from "../../UI/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundColor: "white",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Jobs() {
  const classes = useStyles();

  return (
    <>
      <Navbarr />
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        style={{
          backgroundColor: "transparent",
          boxShadow: "2px 1px 3px lightgray",
        }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/githubjobs">Other Jobs</Nav.Link>
            <Nav.Link href="/jobs">Rural Jobs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          className={classes.image}
          data-spy="scroll"
        >
          <Card className="m-2">
            <Card.Header style={{ backgroundColor: "#f50057", color: "#fff" }}>
              Company Name
            </Card.Header>
            <Card.Body>
              <Card.Title>Role Name</Card.Title>
              <Card.Text>
                description of work description of work description of work
                description of work description of work{" "}
              </Card.Text>
              <h3>
                Location: <strong> Mirzapur</strong>
              </h3>
              <h3>
                Salary: <strong> Rs. 4783</strong>
              </h3>
            </Card.Body>
          </Card>
          <Card className="m-2">
            <Card.Header style={{ backgroundColor: "#f50057", color: "#fff" }}>
              Company Name
            </Card.Header>
            <Card.Body>
              <Card.Title>Role Name</Card.Title>
              <Card.Text>
                description of work description of work description of work
                description of work description of work description of work
              </Card.Text>
              <h3>
                Location: <strong> Mirzapur</strong>
              </h3>
              <h3>
                Salary: <strong> Rs. 4783</strong>
              </h3>
            </Card.Body>
          </Card>
          <Card className="m-2">
            <Card.Header style={{ backgroundColor: "#f50057", color: "#fff" }}>
              Company Name
            </Card.Header>
            <Card.Body>
              <Card.Title>Role Name</Card.Title>
              <Card.Text>
                description of work description of work description of work
                description of work
              </Card.Text>
              <h3>
                Location: <strong> Mirzapur</strong>
              </h3>
              <h3>
                Salary: <strong> Rs. 4783</strong>
              </h3>
            </Card.Body>
          </Card>
          <Card className="m-2">
            <Card.Header style={{ backgroundColor: "#f50057", color: "#fff" }}>
              Company Name
            </Card.Header>
            <Card.Body>
              <Card.Title>Role Name</Card.Title>
              <Card.Text>
                description of work description of work description of work
                description of work description of work description of work
                description of work
              </Card.Text>
              <h3>
                Location: <strong> Mirzapur</strong>
              </h3>
              <h3>
                Salary: <strong> Rs. 4783</strong>
              </h3>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <BreifcaseIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Post a Job!
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="item"
                label="Company Name"
                name="item"
                type="text"
                autoComplete="item"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                halfWidth
                required
                name="number"
                label="Job Role"
                type="text"
                id="margin-normal"
                autoComplete="number"
                className="mr-5"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                halfWidth
                name="number"
                label="Location"
                type="text"
                id="margin-normal"
                autoComplete="number"
                className="mr-5"
              />
              <TextField
                variant="outlined"
                margin="normal"
                halfWidth
                required
                name="number"
                label="Salary"
                type="number"
                id="margin-normal"
                autoComplete="number"
              />
              <TextField
                id="outlined-multiline-static"
                label="Work Description"
                multiline
                rows={4}
                className="my-3"
                variant="outlined"
                fullWidth
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Post
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
