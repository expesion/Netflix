import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AccordianContainer from "./containers/accordian";
import FooterContainer from "./containers/footer";
import JumbotronContainer from "./containers/jumbotron";
import * as ROUTES from "./constants/routes";
function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} />
      <JumbotronContainer />
      <AccordianContainer />
      <FooterContainer />
    </Router>
  );
}

export default App;
