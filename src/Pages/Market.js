import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StorefrontIcon from "@material-ui/icons/Storefront";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Row, Col } from "react-bootstrap";
import Navbarr from "../UI/Navbar";

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

export default function Market() {
  const classes = useStyles();

  return (
    <>
      <Navbarr />
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
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1600x900/?chair,furniture"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. 5600</strong>
                    <br />
                    Seller Contact: <strong>8648324324</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href="tel:8340527198">Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <StorefrontIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sell it out!
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="item"
                label="Item"
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
                label="Category"
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
                label="Price"
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
                label="Phone Number"
                type="number"
                id="margin-normal"
                autoComplete="number"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sell
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
