import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StorefrontIcon from "@material-ui/icons/Storefront";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Row } from "react-bootstrap";
import Navbarr from "../UI/Navbar";
import axios from "axios";
import FormMarket from "../Components/Market/PostProduct";
import market from "../assets/market.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundColor: "white",
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
}));

export default function Market() {
  const classes = useStyles();
  const [listings, setListings] = useState([]);
  useEffect(() => {
    axios
      .get("https://voice4rural.herokuapp.com/market")
      .then((res) => {
        console.log(res.data.listings);
        setListings(res.data.listings);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [listings]);

  return (
    <>
      <Navbarr />

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          item
          xs={7}
          sm={4}
          md={7}
          className={classes.image}
          data-spy="scroll"
        >
          <Row>
            {listings.map((listing) => (
              <Card style={{ width: "18rem" }} className="m-3">
                <Card.Img
                  variant="top"
                  src={`https://source.unsplash.com/1600x900/?${listing.name},${listing.name}`}
                />
                <Card.Body>
                  <Card.Title>{listing.name}</Card.Title>
                  <Card.Text>
                    PRICE : <strong> Rs. {listing.price}</strong>
                    <br />
                    Loaction: <strong>{listing.location}</strong>
                    <br />
                    Seller Name: <strong>{listing.seller}</strong>
                    <br />
                    Seller Contact: <strong>{listing.phone}</strong>
                  </Card.Text>
                  <br />
                  <Button style={{ backgroundColor: "#f50057", color: "#fff" }}>
                    <a href={`tel:${listing.phone}`}>Buy</a>
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div id="google_translate_element"></div>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <StorefrontIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sell your Handmade Products!
            </Typography>
            <FormMarket />
          </div>
          <Grid
            item
            xs={false}
            sm={4}
            md={8}
            className={classes.image}
            data-spy="scroll"
          >
            <img src={market} alt="market" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
