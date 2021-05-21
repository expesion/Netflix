import React, { useState } from "react";
import * as ROUTES from "../constants/routes";
import { Header } from "../components";
import { Profiles } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AddProfile from "../pages/addProfile";
function SelectProfilesContainer({ user, setProfile, addUsers, users }) {
  const [isProfile, setIsProfile] = useState(false);
  const [photoURL, setPhotoURL] = useState(Math.floor(Math.random() * 5));
  const addProfileToProfiles = (name, id) => {
    addUsers(name, id);
    setIsProfile(false);
  };
  const canAddProfile = () => {
    const photoURLS = users.map((user) => user.photoURL);
    if (photoURLS.length > 4) {
      alert("Cannot add more, Please opt for a bigger subscription");
      return;
    }
    let cId = photoURL;
    while (photoURLS.includes(cId)) {
      cId = Math.floor(Math.random() * 5);
    }
    setPhotoURL(cId);
    console.log(photoURL);
    setIsProfile(true);
  };
  return (
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={"images/logo.svg"} alt="netflix" />
      </Header.Frame>
      {!isProfile ? (
        <Profiles>
          <Profiles.Title>Who's Watching?</Profiles.Title>
          <Profiles.UserSelection>
            <Profiles.List>
              {users.length &&
                users.map((user) => {
                  return (
                    <Profiles.User
                      key={user.displayName}
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
                  );
                })}
            </Profiles.List>

            <Profiles.Add onClick={canAddProfile}>
              <FontAwesomeIcon icon={faPlusCircle} size="8x" />
            </Profiles.Add>
          </Profiles.UserSelection>
        </Profiles>
      ) : (
        <AddProfile
          addProfileToProfiles={addProfileToProfiles}
          photoURL={photoURL}
        />
      )}
    </Header>
  );
}

export default SelectProfilesContainer;
