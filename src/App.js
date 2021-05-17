import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";
import IsUserRedirect, { ProtectedUser } from "./helpers/routes";
function App() {
  const user = {};
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          exact
          path={ROUTES.SIGN_IN}
          component={SignIn}
          loggedInPath={ROUTES.BROWSE}
          user={user}
        />
        <IsUserRedirect
          exact
          path={ROUTES.SIGN_UP}
          component={SignUp}
          loggedInPath={ROUTES.BROWSE}
          user={user}
        />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTES.HOME} component={Home} />
        <ProtectedUser
          exact
          path={ROUTES.BROWSE}
          component={Browse}
          user={user}
        />
      </Switch>
    </Router>
  );
}

export default App;
