import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
