import React, { useContext, useState, useEffect } from "react";
import SelectProfileContainer from "./profile";
import { FirebaseContext } from "../context/firebase";
function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, [profile.displayName]);
  return (
    <div>
      <SelectProfileContainer user={user} setProfile={setProfile} />
    </div>
  );
}

export default BrowseContainer;
