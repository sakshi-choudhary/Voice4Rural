import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "react-bootstrap";
import Navbarr from "../UI/Navbar";
import axios from "axios";
import FormJob from "../Components/Jobs/PostJob";
import job from "../assets/Job.gif";
import Button from "@material-ui/core/Button";

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

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("https://voice4rural.herokuapp.com/jobs")
      .then((res) => {
        console.log(res.data.jobs);
        setJobs(res.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [jobs]);

  const classes = useStyles();

  return (
    <>
      <Navbarr />

      <Grid container component="main">
        <CssBaseline />
        <Grid
          item
          xs={10}
          sm={4}
          md={7}
          className={classes.image}
          data-spy="scroll"
        >
          {jobs.map((job) => (
            <row>
              <Card className="m-1" key={job._id.$oid}>
                <Card.Header
                  style={{ backgroundColor: "#f50057", color: "#fff" }}
                >
                  {job.organisation}
                </Card.Header>
                <Card.Body>
                  <Card.Title>{job.designation}</Card.Title>
                  <Card.Text>
                    Location: <strong> {job.location} </strong>
                    <br />
                    Work hours: <strong> {job.workhours} </strong>
                    <br />
                    Base Salary: <strong> Rs. {job.basesalary} </strong>
                    <br />
                    <Button variant="contained" color="primary">
                      <a href={`tel:${job.contactNo}`}>Apply</a>
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </row>
          ))}
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Post a Job Vacancy!
            </Typography>
            <FormJob />
          </div>
          <Grid
            item
            xs={false}
            sm={4}
            md={8}
            className={classes.image}
            data-spy="scroll"
          >
            <img src={job} alt="market" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
