import React from "react";
import { Header, OptForm } from "../components";
import * as ROUTES from "../constants/routes";
function HeaderContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="netflix" src="images/logo.svg" />
          <Header.ButtonLink>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
}

export default HeaderContainer;