import React from "react";
import * as ROUTES from "../constants/routes";
import { Header } from "../components";
import { Profiles } from "../components";
function SelectProfilesContainer({ user, setProfile }) {
  return (
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={"images/logo.svg"} alt="netflix" />
      </Header.Frame>
      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </Header>
  );
}

export default SelectProfilesContainer;
