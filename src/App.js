import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTES.BROWSE} component={Browse} />
      </Switch>
    </Router>
  );
}

export default App;
