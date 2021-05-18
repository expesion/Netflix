import React, { useContext, useState, useEffect } from "react";
import SelectProfileContainer from "./profile";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";
import * as ROUTES from "../constants/routes";
function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [profile.displayName]);
  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : (
      <>
        <Header src="joker1">
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} alt="netflix" src="images/logo.svg" />
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallOut>
              Watch Joker at your home now, with thaha, just kidding
            </Header.FeatureCallOut>
            <Header.Text>
              Arthur Fleck, a party clown, leads an impoverished life with his
              ailing mother. However, when society shuns him and brands him as a
              freak, he decides to embrace the life of crime and chaos.
            </Header.Text>
          </Header.Feature>
        </Header>
        <Loading.ReleaseBody />
      </>
    )
  ) : (
    <div>
      <SelectProfileContainer user={user} setProfile={setProfile} />
    </div>
  );
}

export default BrowseContainer;
