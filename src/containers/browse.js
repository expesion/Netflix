import React, { useContext, useState, useEffect } from "react";
import SelectProfileContainer from "./profile";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";
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
          <Header.Feature>
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
