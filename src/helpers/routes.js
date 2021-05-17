import React from "react";
import { Route, Redirect } from "react-router-dom";
function isUserRedirect({ user, loggedInPath, component, ...restProps }) {
  return (
    <Route
      {...restProps}
      component={() => {
        if (!user) {
          return component;
        } else {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
      }}
    />
  );
}

export default isUserRedirect;
