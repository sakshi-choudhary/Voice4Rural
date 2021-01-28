import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Jobs from "./Pages/Jobs/Jobs";
import GithubJobs from "./Pages/Jobs/GithubJobs";
import Market from "./Pages/Market";
import Home from "./Pages//Home";
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
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
