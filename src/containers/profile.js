import React from "react";
import * as ROUTES from "../constants/routes";
import { Header } from "../components";
function SelectProfileContainer({ user, setProfile }) {
  return (
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={"images/logo.svg"} alt="netflix" />
      </Header.Frame>
    </Header>
  );
}

export default SelectProfileContainer;
