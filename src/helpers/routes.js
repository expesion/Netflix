import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";
function isUserRedirect({
  user,
  loggedInPath,
  component: Component,
  ...restProps
}) {
  return (
    <Route
      {...restProps}
      component={({ location }) => {
        if (!user) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: loggedInPath, state: location }} />;
        }
      }}
    />
  );
}
export function ProtectedRoute({ user, component: Component, ...restProps }) {
  return (
    <Route
      {...restProps}
      component={({ location }) => {
        if (!user) {
          return (
            <Redirect to={{ pathname: ROUTES.SIGN_IN, state: location }} />
          );
        } else {
          return <Component />;
        }
      }}
    />
  );
}
export default isUserRedirect;
