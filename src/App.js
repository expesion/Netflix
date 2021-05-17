import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";
import IsUserRedirect, { ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
function App() {
  const user = useAuthListener();
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
        <ProtectedRoute
          exact
          path={ROUTES.BROWSE}
          component={Browse}
          user={user}
        />
        <Route exact path={ROUTES.HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
