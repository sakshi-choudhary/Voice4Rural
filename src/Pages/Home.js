import React from "react";
import Footer from "../UI/Footer";
import Navbarr from "../UI/Navbar";
import farmer2 from "../assets/Farmer2.gif";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbarr />
      <div>
        <div className="container py-2">
          <div className="row ">
            <div className="col-lg-8 pt-3 pt-lg-3 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className="my-4">
                {" "}
                <strong> Voice4Rural</strong>
              </h1>

              <span>
                <ol>
                  <li>
                    Connect people to nearby vaccination centres to book their
                    places from the available booking slots.
                  </li>
                  <li>
                    {" "}
                    Connecting with buyers to facilitate selling of handmade
                    products made by the village people to make use of their
                    self-learned skills and make some money.{" "}
                  </li>
                  <li>
                    Collect various job recommendations that have been posted in
                    various social platforms and bringing them under a single
                    roof that matches the profile of the user.
                  </li>
                  <li>
                    A machine learning and deep learning based Crop Growth
                    Prediction Model to help Farmers.
                  </li>
                </ol>
              </span>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img">
              <img src={farmer2} className="img-fluid my-5 mx-3" alt="" />
            </div>
            <div className="col-lg-12 order-1 order-lg-3 hero-img my-5">
              <h1 className="my-5">What we Offer?</h1>
              <Button
                variant="contained"
                color="secondary"
                className="m-3 px-5"
              >
                <Link to="/jobs" className="m-2 mx-5 a">
                  Rural Jobs
                </Link>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="m-3 px-5"
              >
                <Link to="/vaccine" className="m-2 mx-5 a">
                  Vaccination Slot Booking
                </Link>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="m-3 px-5"
              >
                <Link to="/crop" className="m-2 mx-5 a">
                  Crop Growth Prediction
                </Link>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="m-3 px-5"
              >
                <Link to="/market" className="m-2 mx-5 a">
                  MarketPlace for Local sellers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
