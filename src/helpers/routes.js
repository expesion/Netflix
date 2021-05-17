import React from "react";
import { Route, Redirect } from "react-router-dom";
function isUserRedirect({
  user,
  loggedInPath,
  component: Component,
  ...restProps
}) {
  return (
    <Route
      {...restProps}
      component={() => {
        if (!user) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
      }}
    />
  );
}
export function ProtectedUser({ user, component: Component, ...restProps }) {
  return (
    <Route
      {...restProps}
      component={() => {
        if (!user) {
          return <Redirect to={{ pathname: "/" }} />;
        } else {
          return <Component />;
        }
      }}
    />
  );
}
export default isUserRedirect;
