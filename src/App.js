import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Jobs from "./Pages/Jobs";
import GithubJobs from "./Components/Jobs/GithubJobs";
import Market from "./Pages/Market";
import Home from "./Pages/Home";
import Vaccine from "./Pages/Vaccine";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/jobs" exact render={() => <Jobs />} />
          <Route path="/githubjobs" exact render={() => <GithubJobs />} />
          <Route path="/" exact render={() => <Home />} />
          <Route path="/market" exact render={() => <Market />} />
          <Route path="/vaccine" exact render={() => <Vaccine />} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
