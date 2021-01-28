import React from "react";
import Footer from "../UI/Footer";
import Navbarr from "../UI/Navbar";
import "./Home.module.css";
function Home() {
  return (
    <>
      <Navbarr />
      <div>
        <div className="container py-2">
          <div className="row ">
            <div className="col-lg-8 pt-3 pt-lg-3 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>
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
                    Scraping information from twitter about changes in policy or
                    any existing setups. Also displaying news of deemed
                    importance from ministry or any national authority.{" "}
                  </li>
                  <li>
                    Providing hourly updates about changes/fluctuations in the
                    prices of essential commodities, sensex, petrol, diesel,
                    gold.
                  </li>
                  <li>
                    Predicting the weather A social media platform where people
                    can post their problems so that users from all around can
                    jointly provide a solution or provide support.
                  </li>
                </ol>
              </span>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img">
              <img
                src="https://source.unsplash.com/1600x1600/?random"
                className="img-fluid my-5 mx-3"
                alt=""
              />
            </div>
            <div className="col-lg-12 order-1 order-lg-3 hero-img my-5">
              <h1>How we help?</h1>
              <ol>
                Booking done in the nearest hospital on basis of available
                slots. A simple setup to assist people who aren’t much familiar
                with technology. Another easy to use setup to post the
                handmade-items along with the negotiable price and the contact
                details. This will be a really good step up in turning India
                atmanirbhar and will also in turn help the needy. Matching jobs
                based on the user profile and giving updates based on that.
                Almost everyone in villages are looking for jobs and this would
                surely help them in the run. Apart from newspapers, news from
                social media isn’t accessible by majority of the rural people.
                Instead of showing all, if we display messages based on their
                interests/any major announcements that would surely help the
                people. The middle men often take advantage of the
                farmer’s/rural people’s inability to catch up with the latest
                fluctuations in price, this keeps the farmers at a loss. Hence
                with proper hourly updates displayed in our webapp, it won’t
                stand a problem anymore. Prior updates about weather, storms or
                natural calamities, can keep the people prepared beforehand.
                Social media based feature to bring one’s problem(which went
                unaddressed) on a larger platform.
              </ol>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
