import React from "react";
import * as ROUTES from "../constants/routes";
import { Header } from "../components";
import { Profile } from "../components/header/style/header";
import { Profiles } from "../components";
function SelectProfileContainer({ user, setProfile }) {
  return (
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={"images/logo.svg"} alt="netflix" />
      </Header.Frame>
      <Profile>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profile.List>
          <Profile.User>
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </Header>
  );
}

export default SelectProfileContainer;
