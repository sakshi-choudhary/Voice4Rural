import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Jobs from "./Pages/Jobs";
import Market from "./Pages/Market";
import Home from "./Pages/Home";
import Vaccine from "./Pages/Vaccine";
import News from "./Pages/News";
import Crop from "./Pages/Crop";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/jobs" exact render={() => <Jobs />} />
          <Route path="/" exact render={() => <Home />} />
          <Route path="/market" exact render={() => <Market />} />
          <Route path="/vaccine" exact render={() => <Vaccine />} />
          <Route path="/crop" exact render={() => <Crop />} />
          <Route path="/news" exact render={() => <News />} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
