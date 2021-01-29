import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container, Nav, Navbar } from "react-bootstrap";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";
import Footer from "../../UI/Footer";
import Navbarr from "../../UI/Navbar";

function GithubJobs() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

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
      <Container className="my-4">
        <h1 className="mb-4">
          {" "}
          <strong>Jobs</strong>{" "}
        </h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try Refreshing.</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </Container>
      <Footer />
    </>
  );
}

export default GithubJobs;
