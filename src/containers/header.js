import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
function HeaderContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="netflix" src="images/logo.svg" />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
}

export default HeaderContainer;
