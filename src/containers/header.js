import React from "react";
import { Header } from "../components";

function HeaderContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src="images/logo.svg" />
          <Header.ButtonLink>Sign In</Header.ButtonLink>
        </Header.Frame>
      </Header>
      {children}
    </>
  );
}

export default HeaderContainer;
